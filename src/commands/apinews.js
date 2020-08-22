const fetch = require('node-fetch');
const querystring = require('querystring');

const base_url = "https://hacker-news.firebaseio.com/v0/item/";


module.exports = async (msg, args) => {
    if (args === 'urban') {
        if (!args.length) {
            return msg.channel.send('You need to supply a search term!');
        }

        const query = querystring.stringify({
            term: args.join(' ')
        });

        const {
            list
        } = await fetch(
            `https://api.urbandictionary.com/v0/define?${query}`
        ).then((response) => response.json());
    }
};