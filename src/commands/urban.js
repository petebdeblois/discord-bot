const Discord = require("discord.js");
const fetch = require("node-fetch");
const querystring = require("querystring");



const trim = (str, max) =>
    str.length > max ? `${str.slice(0, max - 3)}...` : str;
//const command = args.shift().toLowerCase();

module.exports = async (msg, args) => {

    console.log("args: " + args + " msg: " + msg);
    if (!args.length) {
        return msg.channel.send("You need to supply a search term!");
    }

    const query = querystring.stringify({
        term: args.join(" "),
    });

    const {
        list
    } = await fetch(
        `https://api.urbandictionary.com/v0/define?${query}`
    ).then((response) => response.json());

    if (!list.length) {
        return msg.channel.send(`No results found for **${args.join(" ")}**.`);
    }

    const [answer] = list;

    const embed = new Discord.MessageEmbed()
        .setColor("#e134eb")
        .setTitle(answer.word)
        .setURL(answer.permalink)
        .addFields({
            name: "Definition",
            value: trim(answer.definition, 1024),
        }, {
            name: "Example",
            value: trim(answer.example, 1024),
        }, {
            name: "Rating",
            value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`,
        });
    msg.channel.send(embed);
};
