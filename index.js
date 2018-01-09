var EventEmitter = require('events').EventEmitter;

var OSinfo = require('./modules/OSinfo');
var emitter = new EventEmitter();

emitter.on("beforeCommand", function(instruction) {
	console.log('You wrote: ' + instruction + ' trying to run command.');
});

emitter.on("afterCommand", function() {
	console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
console.log('Hello, give the command!')
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		//odpalenie zdarzenia beforeComand (z paramentrem)
		emitter.emit('beforeCommand' , instruction);
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/ver':
				console.log(process.versions);
				break;
			case '/env':
				console.log(process.env);
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
		 	default:
				process.stderr.write('Wrong instruction!');
		};
		//emitowanie zdarzenia afterCommand (bez parametru)
		emitter.emit('afterCommand');
	}
});