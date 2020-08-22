const ping = require('./ping');
const eightBall = require('./8ball');
const fortune = require('./fortune');
const uptime = require('./uptime');
const urban = require('./urban');
const f1 = require('./f1');

const guildID = process.env.GUILD_ID;
const channelID = process.env.CHANNEL_ID;

const commands = {
    ping,
    '8ball': eightBall,
    fortune,
    uptime,
    urban,
    f1
};

module.exports = async (msg) => {
    console.log(msg);
    if (msg.guild.id === guildID && msg.channel.id === channelID) {
        const args = msg.content.split(' ');
        if (args.length == 0 || args[0].charAt(0) !== '!') return;
        const command = args.shift().substr(1);
        if (Object.keys(commands).includes(command)) {
            commands[command](msg, args);
        }
    }
};