const Discord = require("discord.js");
require("dotenv").config();

const commandHandler = require("./commands");

const client = new Discord.Client();

client.once("ready", () => {
    console.log("🤖 Beep beep! I am ready!");
    client.user.setActivity("The Sopranos", {
        type: "WATCHING"
    }
        // Alternatively, you can set the activity to any of the following:
        // PLAYING, STREAMING, LISTENING, WATCHING
        // For example:
        // client.user.setActivity("TV", {type: "WATCHING"})
    );
});

client.on("message", commandHandler);

client.login(process.env.BOT_TOKEN);
