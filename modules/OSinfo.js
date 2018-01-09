var timer = require('./time');
var os = require('os');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();

	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	
	console.log('System: '.gray , type);
	console.log('Release: '.red, release);
	console.log('CPU model: '.green, cpu);
	console.log('Uptime: '.red, timer.print(uptime).green);
	console.log('User name: '.white, userInfo.username);
	console.log('Home dir: '.grey, userInfo.homedir);
}
exports.print = getOSinfo;