const fortune = require('fortune-tweetable');
/*
module.exports = {
    name: 'fortune',
    triggers: ['!fortune', '🔮'],
    description: 'Get a quote from the fortune-tweetable package.',
    handler: (msg) => {
        return msg.channel.send(fortune.fortune());
    },
};
*/
module.exports = async (msg) => {
    await msg.channel.send(fortune.fortune());
    console.log('fortune');
};