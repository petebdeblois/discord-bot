const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

// change those to env var
const guildID = '514271370637475841';
const channelID = '746742703332786256';

client.once('ready', () => {
    // eslint-disable-next-line no-undef
    console.log('BEEP');
});

client.on('message', async (msg) => {
    //console.log(msg);
    if (msg.channel.guild.id === guildID && msg.channel.id === channelID) {
        console.log('pinggggg');
        if (msg.content.toLowerCase() === 'ping') {
            await client.reply('pong');
            console.log('replied pong (sent)');
        }
    }
});

client.login(process.env.BOT_TOKEN);