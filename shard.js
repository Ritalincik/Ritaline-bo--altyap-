const { ShardingManager } = require('discord.js');
const config = require('./config.json')
const xd = new ShardingManager('./bot.js', {
	totalShards: "auto",
    token: `${config.token}`
});
xd.spawn();

xd.on('shardCreate', shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id+1} İDli shard başlatıldı.`);
});
