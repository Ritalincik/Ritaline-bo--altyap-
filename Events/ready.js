const Discord = require("discord.js");
const ayar = require('../config.json');
module.exports = async client => {
    console.log('' + client.user.tag + ' ismiyle giriş yapıldı.')
    client.user.setPresence({ activity: { type: "PLAYING", name: ayar.durum }, status: ayar.status })
};
