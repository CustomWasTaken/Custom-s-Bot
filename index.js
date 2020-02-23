
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjgwOTQyMTMyOTk0OTAwMDU5.XlHhlQ.Fh2P2q23-SyIbjpnehUG8OQsThE';

const PREFIX = '/';

var version = '1.0.9';


bot.on('ready', () => {
    console.log('Ryyan just got updated.');
    bot.user.setActivity('WATCHING HUGOS COMMUNITY, {
        type: 'TEST'
    }).catch(console.error);


})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`Welcome to our server, ${member}, please read the rules in the rules channel!`)
});





bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.reply('pong!');
            break;
        case 'hello':
            message.reply('Hello there!');
            break;
        }
});

        bot.login(token);
