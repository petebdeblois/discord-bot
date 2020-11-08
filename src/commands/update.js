const Discord = require("discord.js");
const axios = require("axios");

module.exports = async (msg) => {
    var url = "https://www.thatshaman.com/tools/countdown/?format=json";
    const config = {
        method: "get",
        url: url,
        headers: {},
    };

    // eslint-disable-next-line no-unused-vars
    const data = axios(config)
        .then(function (response) {
            let datap = response.data;
            console.log(datap["MRData"]);
            const embed = new Discord.MessageEmbed()
                .setColor("##ff1e00")
                .setTitle("Next Update")
                //.setDescription("This is the result of the last F1 race")
                .setURL(datap["url"])
                .addFields({
                    name: "Confirmed",
                    value: datap["confirmed"],
                }, {
                    name: "When",
                    value: datap["when"],
                });
            msg.channel.send(embed);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
