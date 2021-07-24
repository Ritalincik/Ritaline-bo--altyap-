const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const fs = require("fs");
require('./util/Loader.js')(client);

const moment = require('moment');
require('moment-duration-format')

const mongoose = require('mongoose');
mongoose.connect('mongoURL', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    console.log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        client.commands.set(props.config.name, props);
        props.config.aliases.forEach(alias => {
            client.aliases.set(alias, props.config.name);
        });
    });
})

client.on('ready', () => {
  console.log(`${client.user.tag} adı ile giriş yapıldı. Toplam Shard Sayısı : ${client.shard.count}`);
});

client.login(`${config.token}`);
