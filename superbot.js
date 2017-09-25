module.exports = {
	botInit : function(token,bot_id,bot_folder = "./"){
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const fs = require('fs');
		const url = require('url');
		const http = require('http');
		const glob = require('glob');
		const shelljs = require('shelljs');
		const Ctoken = token;
		const Cbot_id = bot_id;
		const Cbot_folder = bot_folder;
		const cmd_prefix = ".";
		const log = bot_folder+'cmd.log';
		const error = bot_folder+'error.log';
		client.on('ready', () => {
			var username = client.user.username;
			console.log(`Logged in as ${username}!`);
	client.user.setPresence({ game: { name: `try .help @${username}`, type: 0 } });
});
		client.login(token);
		function etablish_connection(){
			client.login(token);
		}
		return new Map([["client",client],["fs",fs],["url",url],["http",http],["glob",glob],["shelljs",shelljs],["token",Ctoken],["bot_id",Cbot_id],["bot_folder",Cbot_folder],["cmd_prefix",cmd_prefix],["log",log],["error",error]]);
	},
	ucFirst : function(str){
		return str.charAt(0).toUpperCase()+str.substr(1).toLowerCase();
	},
	etablish_connection : function(client,token){
		client.login(token);
	},
	disconnect : function(client){
		client.destroy();
	},
	shutdown : function(client){
		disconnect(client);
		process.exit();
	},
	reboot : function(client){
		disconnect(client);
		etablish_connection(client);
	},
	getFormatedDate : function(){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth();
		month = (month < 10?"0"+month:month);
		var day = d.getDate();
		day = (day < 10?"0"+day:day);
		var hours = d.getHours();
		hours = (hours < 10?"0"+hours:hours);
		var minutes = d.getMinutes();
		minutes = (minutes < 10? "0"+minutes:minutes);
		var seconds = d.getSeconds();
		seconds = (seconds < 10?"0"+seconds:seconds);
		return "["+year+"-"+month+'-'+day+'T'+hours+':'+minutes+':'+seconds+']'
	}
}