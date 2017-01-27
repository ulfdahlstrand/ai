var Discord = require('discord.io');
var conversation = require('./conversation');

var bot = new Discord.Client({
    token: "Mjc0NjU4MDYxNTE0MTc4NTYw.C21TNA.y_IaaKp26Ot75QNsK_EYjVIklgQ",
    autorun: true
});

bot.on('ready', function() {

});

bot.on('message', function(user, userID, channelID, message, event) {
    if (bot.id !== userID) {
        bot.sendMessage({
            to: channelID,
            message: conversation.respond(conversation.listen(message))
        });
    }
});

bot.on('presence', function(user, userID, status, game, event) {

    bot.sendMessage({
        to: channelID,
        message: user
    });

});

bot.on('disconnect', function(msg, code) {
    if (code === 0) return console.error(msg);
    bot.connect();
});
