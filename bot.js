const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
    }
}
});

client.login('NDU5MTQ4NTE3NjM4OTMwNDQx.Dgx-8w.khqw6AMtay6y8XMg5cXXM8pLpWg')
