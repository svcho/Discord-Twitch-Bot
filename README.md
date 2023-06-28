# Twitch Stream Notification Discord Bot

This bot sends a notification to a specific Discord channel every time a specified Twitch stream goes live. It is written in Node.js, using the discord.js and axios libraries.

##  Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js and npm must be installed
* A Twitch account with a registered application to get a client ID and secret are needed (Explained below)
* A Discord account with a registered bot to get a bot token is needed (Explained below)

### Getting your Twitch client ID and secret

* Go to the [Twitch Developer Console](https://dev.twitch.tv/console/apps)
* Click on "Register Your Application"
* Name your application, set OAuth Redirect URLs to http://localhost (for local development)
* Select category as "Chat Bot"
* Once created, click on "Manage" to see your client ID and client secret. Note these down for your .env variable

### Creating your Discord bot and getting your Discord Bot token

* Go to the [Discord Developer Portal](https://discord.com/developers/applications)
* Click on the "New Application" button
* Name your application and click on "Create"
* Go to the Bot tab and click on "Add Bot"
* Note down the token for the .env variable

### Getting your Channel ID where messages will be sent

* Open your Discord client, click the User Settings icon (the cogwheel) near your profile picture in the bottom left corner
* In the settings sidebar, click on Appearance under the App Settings section
* Scroll down to the Advanced section, and toggle on the Developer Mode. This will enable a variety of developer-specific features, one of which allows you to copy IDs

Once Developer Mode is enabled, you can get the ID of any channel:

* Go to the server that contains the channel
* Right-click on the channel's name
* Click "Copy ID" from the context menu
* This ID will be needed for the .env variable

### Adding the bot to the server

* Go back to Discord Developer Portal, click on OAuth2 tab
* In scopes, select "bot", and in bot permissions, select "Send Messages"
* Use the generated URL to add bot to your server

## Setting up the bot

1. Clone this repository and navigate into its directory:
````
git clone https://github.com/svcho/Discord-Twitch-Bot.git
cd Discord-Twitch-Bot
````

2. Install dependencies:
````
npm install
````

3. Create a .env file in the root directory with your Twitch and Discord credentials. Replace the placeholders with your actual values:
````
DISCORD_BOT_TOKEN=your-discord-bot-token
TWITCH_CLIENT_ID=your-twitch-client-id
TWITCH_SECRET=your-twitch-secret
STREAMER_NAME=streamer-name
DISCORD_CHANNEL_ID=discord-channel-id
````

## Running the bot

1. Start the bot:
````
node index.js
````

You should now see the bot online in your Discord server and it will post a message whenever the specified Twitch stream goes live.

## Running the bot in the background (optional)

If you want to keep the bot running even after closing the terminal or rebooting the machine, you can use a process manager like pm2. 

1. Install pm2 globally:
````
npm install pm2 -g
````

2. Start the application with pm2:
````
pm2 start index.js --name "discord-bot"
````

3. Make pm2 start at boot:
````
pm2 startup
````

Run the command that pm2 generates for you.

4. Save the current process list:
````
pm2 save
````

Now, your bot should automatically start when your machine boots up.

Thats it!