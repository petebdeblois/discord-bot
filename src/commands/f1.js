const Discord = require('discord.js');
//const fetch = require('node-fetch');

var axios = require('axios');
const {
    json
} = require('express');
// const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;


module.exports = async (msg) => {
    var config = {
        method: 'get',
        url: 'http://ergast.com/api/f1/current/last/results.json',
        headers: {},
    };

    const data = axios(config)
        .then(function (response) {
            let datap = JSON.stringify(response.data);
            console.log(datap);
            const embed = new Discord.MessageEmbed()
                .setColor('#e134eb')
                .setTitle(datap)
                .setURL(data.url);
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
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    /*
    const MRData = await fetch(
            'http://ergast.com/api/f1/current/last/results.json'
        )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    */  
    //const [answer] = data;
    /*
    const embed = new Discord.MessageEmbed()
        .setColor('#e134eb')
        .setTitle(data.MRData.series)
        .setURL(data.url);

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
   
    msg.channel.send(embed);
 */
};