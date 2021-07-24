const { ShardingManager } = require('discord.js');
const config = require('./config.json')
const sex = new ShardingManager('./bot.js', {
	totalShards: "auto",
    token: `${config.token}`
});
sex.spawn();

sex.on('shardCreate', shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id+1} İDli shard başlatıldı.`);
});
