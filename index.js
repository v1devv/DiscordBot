const { Collection, RichEmbed } = require("discord.js");
const { token, database } = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();

  // Connections
client.on("disconnect", () => client.logger.log("Bot is disconnecting...", "warn"))
	.on("reconnecting", () => client.logger.log("Bot reconnecting...", "log"))
	.on("error", (e) => client.logger.log(e, "error"))
	.on("warn", (info) => client.logger.log(info, "warn"));
