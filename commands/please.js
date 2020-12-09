const Bot = require(`../BotLibrary.js`);

module.exports = {
    name: 'please',
    execute(message, args, discord, client) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('#670d08')
        .setDescription(`**002** \n\n Darling in the FranXX <:female:786177923387621396> \n *Animanga roulette* · **1131** <:kakera:786176697807929344> \n Claims: #1 \n Likes: #1 \n Zero Two (+1)`)
        .setImage('https://media.discordapp.net/attachments/472313197836107780/571169868276039710/bMKEgh7.png')
        .setFooter( `Belongs to ${message.author.username} ~~ 1 / 30`, message.author.avatarURL());

        message.react('🤣');
        message.channel.send(newEmbed).then(sentEmbed => {
            sentEmbed.react('👀');
            // sentEmbed.awaitReactions((reaction, user) => user.id === message)
            client.users.cache.get(message.author.id).send('Just kidding! No 002 for you!');
        });
    }
}