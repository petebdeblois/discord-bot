const countdown = require("countdown");
const bootTime = new Date();

/* module.exports = {
    name: 'uptime',
    triggers: ['uptime', 'ut', '⏱'],
    description: 'See how long CG-Bot has been up.',
    handler: (msg) => {
        return msg.channel.send(
            `CG-Bot has been up since ${bootTime.toUTCString()} for a total of: ${countdown(
                bootTime
            )}`
        );
    },
};
 */
module.exports = async (msg) => {
    await msg.channel.send(
        `CG-Bot has been up since ${bootTime.toUTCString()} for a total of: ${countdown(
            bootTime
        )}`
    );
    console.log("uptime");
};
