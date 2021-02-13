const VideoGameStore = require(`../apistores/videogamestore.js`);

module.exports = {
    name: 'games',
    execute(message, args, discord, client) {
        let data = fetch("https://localhost:44367/api/VideoGames")
            .then((response) => response.blob())
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(error => {
                console.error(error);
            });
        
        console.log(data);

        const newEmbed = new discord.MessageEmbed()
        .setColor('#670d08')
        .setDescription(result)
        .setFooter( `${message.author.username}`, message.author.avatarURL());

        message.channel.send(newEmbed);
    }
}