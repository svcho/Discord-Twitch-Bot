require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();

const twitchClientID = process.env.TWITCH_CLIENT_ID;
const twitchSecret = process.env.TWITCH_SECRET;
const twitchStreamer = process.env.STREAMER_NAME;
const discordChannelID = process.env.DISCORD_CHANNEL_ID;
let twitchToken;

// Fetch the OAuth token from Twitch
axios.post(`https://id.twitch.tv/oauth2/token?client_id=${twitchClientID}&client_secret=${twitchSecret}&grant_type=client_credentials`)
    .then(res => {
        twitchToken = res.data.access_token;
    });

// Every minute, check if the stream is live
setInterval(() => {
    axios.get(`https://api.twitch.tv/helix/streams?user_login=${twitchStreamer}`, {
        headers: {
            'Client-ID': twitchClientID,
            'Authorization': `Bearer ${twitchToken}`
        }
    }).then(res => {
        if(res.data.data.length > 0) {
            // Stream is live
            let channel = client.channels.cache.get(discordChannelID);
            let streamTitle = res.data.data[0].title; // Extracting stream title from the response
            if(channel) channel.send(`${twitchStreamer} is live now!\n\nStream Title: "${streamTitle}"\n\nWatch here: https://twitch.tv/${twitchStreamer}`);
        }
    });
}, 60000);

client.login(process.env.DISCORD_BOT_TOKEN);