const Discord = require('discord.js');


var axios = require('axios');



module.exports = async (msg) => {
    var config = {
        method: 'get',
        url: 'http://ergast.com/api/f1/current/last/results.json',
        headers: {},
    };

    const data = axios(config)
        .then(function (response) {
            let datap = response.data;
            console.log(datap['MRData']);
            const embed = new Discord.MessageEmbed()
                .setColor('#e134eb')
                .setTitle('Last Race Result ' + datap['MRData']['RaceTable']['Races'][0]['raceName'])
                .setURL(datap['MRData']['RaceTable']['Races'][0]['raceName'])
                .addFields({
                    name: 'Circuit',
                    value: datap['MRData']['RaceTable']['Races'][0]['Circuit']['circuitName'],
                }, {
                    name: 'Date',
                    value: datap['MRData']['RaceTable']['Races']['data'],
                }, {
                    name: 'Rating',
                    value: 'yo',
                });

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