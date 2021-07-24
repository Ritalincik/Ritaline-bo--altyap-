const { client, Message } = require("discord.js");
const config = require('../config.json')

module.exports.run = async(client, message, args) => {

  if(!message.author.id.includes(`${config.sahip}`)) return;

    if (!args[0]) return message.channel.send(`\`kod belirtmedin.\``);
    let code = args.join(' ');

    function clean(text) {
      if (typeof text !== 'string') text = require('util').inspect(text, { depth: 0 })
      text = text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
      return text;
    };
    try {
      var evaled = clean(await eval(code));
      if(evaled.match(new RegExp(`${client.token}`, 'g')));
      message.channel.send(`${evaled}`, {code: "js", split: true});
    } catch(err) { message.channel.send(err, {code: "js", split: true}) };
}
    exports.config = {
        name: "eval",
        usage: `${config.prefix}eval`,
        guildOnly: false,
        aliases: [],
        cooldown: 1000
    };
