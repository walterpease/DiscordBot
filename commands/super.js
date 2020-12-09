const Bot = require(`../BotLibrary.js`);

module.exports = {
    name: 'super',
    execute(message, args, discord, client) {
        Bot.post('https://i.imgur.com/IhAzZCx.jpg', message);
        Bot.post(`${message.author} SUUUUUPERRRRRRR!!`, message);
    }
}