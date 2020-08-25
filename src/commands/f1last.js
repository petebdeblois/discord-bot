const Discord = require('discord.js');


var axios = require('axios');



module.exports = async (msg) => {
    var config = {
        method: 'get',
        url: 'http://ergast.com/api/f1/current/last/results.json',
        headers: {},
    };

    // eslint-disable-next-line no-unused-vars
    const data = axios(config)
        .then(function (response) {
            let datap = response.data;
            console.log(datap['MRData']);
            //const attachment = new Discord.MessageAttachment('./img/f1logo.jpg', 'f1.jpg');
            const embed = new Discord.MessageEmbed()
                .setColor('##ff1e00')
                //.attachFiles(attachment)
                //.setImage('attachment://f1.jpg')
                .setTitle(datap['MRData']['RaceTable']['Races'][0]['raceName'])
                .setDescription('This is the result of the last F1 race')
                .setURL(datap['MRData']['RaceTable']['Races'][0]['url'])
                .addFields({
                    name: 'Circuit',
                    value: datap['MRData']['RaceTable']['Races'][0]['Circuit']['circuitName'],
                }, {
                    name: 'Date',
                    value: datap['MRData']['RaceTable']['Races'][0]['date'],
                }, {
                    name: 'Podium',
                    value: `1 - ${datap['MRData']['RaceTable']['Races'][0]['Results'][0]['Driver']['familyName']} \n
                    2 - ${datap['MRData']['RaceTable']['Races'][0]['Results'][1]['Driver']['familyName']} \n
                    3 - ${datap['MRData']['RaceTable']['Races'][0]['Results'][2]['Driver']['familyName']} \n`,
                })
                .addField('Inline field title', 'Some value here', true)
                .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

            msg.channel.send(embed);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

};