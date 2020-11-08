const Discord = require("discord.js");
const  axios = require("axios");

module.exports = async (msg, args) => {
    console.log("args: " + args[0]);
    let argsString = args.toString();
    if (args[0] === "last") {
        console.log("1 " + argsString);
        var config = {
            method: "get",
            url: "http://ergast.com/api/f1/current/last/results.json",
            headers: {},
        };

        // eslint-disable-next-line no-unused-vars
        const data = axios(config)
            .then(function (response) {
                let datap = response.data;
                console.log(datap["MRData"]);
                //const attachment = new Discord.MessageAttachment('./img/f1logo.jpg', 'f1.jpg');
                const embed = new Discord.MessageEmbed()
                    .setColor("##ff1e00")
                    //.attachFiles(attachment)
                    //.setImage('attachment://f1.jpg')
                    .setTitle(datap["MRData"]["RaceTable"]["Races"][0]["raceName"])
                    .setDescription("This is the result of the last F1 race")
                    .setURL(datap["MRData"]["RaceTable"]["Races"][0]["url"])
                    .addFields({
                        name: "Circuit",
                        value: datap["MRData"]["RaceTable"]["Races"][0]["Circuit"][
                            "circuitName"
                        ],
                    }, {
                        name: "Date",
                        value: datap["MRData"]["RaceTable"]["Races"][0]["date"],
                    });
                for (let i = 0; i < datap.MRData.RaceTable.Races[0].Results.length; i++) {
                    embed.addField(
                        datap["MRData"]["RaceTable"]["Races"][0]["Results"][i][
                            "position"
                        ],
                        datap["MRData"]["RaceTable"]["Races"][0]["Results"][i][
                            "Driver"
                        ]["code"],
                        true
                    );
                }
                msg.channel.send(embed);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } else if (args[0] === "schedule") {
        console.log("2");
        config = {
            method: "get",
            url: "http://ergast.com/api/f1/current.json",
            headers: {},
        };

        // eslint-disable-next-line no-unused-vars
        const data = axios(config)
            .then(function (response) {
                let datap = response.data;
                console.log(datap["MRData"]);
                const embed = new Discord.MessageEmbed()
                    .setColor("##ff1e00")
                    .setTitle("Schedule of the Season")
                    //.setDescription("This is the result of the last F1 race")
                    .setURL("https://www.formula1.com/en/racing/2020.html");
                for (let i = 0; i < datap.MRData.RaceTable.Races.length; i++) {
                    embed.addField(
                        datap["MRData"]["RaceTable"]["Races"][i]["date"],
                        datap["MRData"]["RaceTable"]["Races"][i]["Circuit"]["circuitName"],
                        true
                    );
                }
                msg.channel.send(embed);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
};
