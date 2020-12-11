const Bot = require(`../BotLibrary.js`);

module.exports = {
    name: 'kill',
    execute: async function(message, args, discord, client) {
        console.log((await client.users.fetch(args[0].replace(/\D/g, ""))).username);

        const target = `**${(await client.users.fetch(args[0].replace(/\D/g, ""))).username}**`;
        const poster = `**${message.author.username}**`;
        const description = `I'm gonna actually kill ${target} legit. Thanks for the heads up ${poster}`;

        const imageEmbed = new discord.MessageEmbed()
        .setColor('#000000')
        .setImage('https://pbs.twimg.com/media/D0J5hdaUYAAQ1io.jpg');

        const textEmbed = new discord.MessageEmbed()
        .setDescription(description);

        message.react('☠️');
        message.channel.send(imageEmbed);
        message.channel.send(textEmbed).then(sentEmbed => {
            sentEmbed.react('☠️');
        });
    }
}