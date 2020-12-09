const Bot = require(`../BotLibrary.js`);

module.exports = {
    name: 'imalittlestinker',
    execute(message, args, discord, client) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('#670d08')
        .setDescription(`**${message.author.username}** \n\n A seriously Stinky Goon 🚽 \n *Stank* · **42069** 💩`)
        .setImage('https://i.imgur.com/JtO1Dy6.png')
        .setFooter( `${message.author.username} is definitely a little stinker.`, message.author.avatarURL());

        message.react('💩');
        message.channel.send(newEmbed).then(sentEmbed => {
            sentEmbed.react('💩');
        });
    }
}