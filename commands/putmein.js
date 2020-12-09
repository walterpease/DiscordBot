const Bot = require(`../BotLibrary.js`);

module.exports = {
    name: 'putmein',
    execute(message, args, discord, client) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('#670d08')
        .setDescription(`**${message.author.username}** \n\n Holy Heck Mudae-Fiend 👑 \n *HHIRLL roulette* · **42069** <:kakera:786176697807929344> \n Claims: #42 \n Likes: #86 \n A Good Goon (+32)`)
        .setImage(message.author.avatarURL())
        .setFooter( `Belongs to ${message.author.username} ~~ 1 / 69`, message.author.avatarURL());

        message.react('🤣');
        message.channel.send(newEmbed).then(sentEmbed => {
            sentEmbed.react('👀');
        });
    }
}