const Discord = require('discord.js');
const fetch = require('node-fetch');


// const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;


module.exports = async (msg) => {


    const {
        list
    } = await fetch(
        'http://ergast.com/api/f1/current/last/results.json'
    ).then(response => response.json())
        .then(data => console.log(data))
        .then(data => print(data));
    //msg.channel.send(list);
    //console.log('list' + JSON.parse(list));
    if (!list.length) {
        return msg.channel.send('List is undefined ');
    }
    //const [answer] = list;
    function print(list) {
        const embed = new Discord.MessageEmbed()
            .setColor('#e134eb')
            .setTitle(list.MRData.series)
            .setURL(list.url);
        /*
        .addFields({
            name: 'Definition',
            value: trim(answer.definition, 1024),
        }, {
            name: 'Example',
            value: trim(answer.example, 1024),
        }, {
            name: 'Rating',
            value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`,
        });
        */
        msg.channel.send(embed);
    }
};