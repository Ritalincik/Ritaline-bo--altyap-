const Discord = require("discord.js")
const config = require('../config.json')

module.exports.run = async(client, message, args) => {
message.channel.send(`${client.ws.ping}`)
};

exports.config = {
    name: "ping",
    usage: `${config.prefix}ping`,
    guildOnly: false,
    aliases: [],
    cooldown: 3000
};
