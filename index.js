const Discord = require('discord.js');
const Bot = require(`./BotLibrary.js`);
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const botToken = 'Nzg2MDczMTU3NzA2NDQ4OTE2.X9BFrQ.wH0KH5OckNDFHNS8gBKq4fqU-k8';
const prefix = '$';

initializeCommands();

// Events
client.once('ready', () => {
    Bot.log('Super Bot is online!');
});

client.on('message', message => {
    handleMessage(message);
});

// Functions
function initializeCommands() {
    for(const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
}

function handleMessage(message) {
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    } else {
        Bot.log(`Valid Command`);

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        
        handleCommand(command, message, args);
    }
}

function handleCommand(command, message, args) {
    Bot.log(`Handling Command: ${command}`);

    try {
        client.commands.get(command).execute(message, args, Discord, client);
    } catch (e) {
        Bot.log(`Command Not Found: ${e}`);
    }
}

// Login
client.login(botToken);
