const qrcode = require('qrcode-terminal');
//const QRCode = require('qrcode')
const chalk = require("chalk");
const gradient = require('gradient-string');

/*var http = require('http');
var fs = require('fs');

const PORT=8080; 
fs.readFile('public/index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  

        response.end();  
    }).listen(PORT);
});
*/





const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
	authStrategy: new LocalAuth(),
});

console.clear()
client.on('loading_screen', (percent, message) => {
    console.log(chalk.gray('| NOVA v1.0 | Loading |', percent, '|', message, '|'));
});

console.clear()
console.log(chalk.red('| NOVA v1.0 | Authentication |\n'))
console.log(chalk.yellow(`\n\nStep 1 - Open WhatsApp On Your Android or iOS Device.`))
console.log(chalk.gray(`\n\nStep 2 - | Android Device - * Tap On The 3 Dots Button / More Options Button On Top-right Corner On The Screen.\n                            * Tap On Linked Devices Button.\n                            * Tap On "Link A Device" Button and Scan The QR Code Below.\n                            * Wait For Receiving The Message That "Linked With Your Device Successfully!".\n\n         | iOS Device - * Go to Settings On Your iOS Device's WhatsApp Application.\n                        * Tap On "WhatsApp Web/ Desktop"\n                        * Tap On "Link A Device" Button and Scan The QR Code Below.\n                        * Wait For Recieving The Message That "Linked With Your Device Successfully!".\n\n`))


client.on('qr', qr => {

/*    QRCode.toFile('public/qr.png', qr, {
        color: {
          dark: '#000000',  // Black dots
          light: '#0000' // Transparent background
          
        }
      }, function (err) {
        if (err) throw err
        console.log(chalk.green('\n\nQR Code Generated Successfully! Visit index.html to see the QR Code. (Public/index.html)\n\n'))
      })
*/
	qrcode.generate(qr, {small: true});     
});

client.on('ready', async () => {
	console.clear()
	console.log(chalk.red('| NOVA v1.0 | Authentication |\n'))
	console.log(chalk.gray('\nConnected With Your Device Successfully!'));
/*  fs.unlink('public/qr.png',function(err){
    if(err) return console.log(err);
    console.log(chalk.red('\n\nQR Code Data Erased!'));
*/
});  
	setTimeout(() => {
    		console.clear();
		console.log(gradient.rainbow(
    `
    
    ███╗   ██╗ ██████╗ ██╗   ██╗ █████╗     ██╗   ██╗ ██╗    ██████╗ 
    ████╗  ██║██╔═══██╗██║   ██║██╔══██╗    ██║   ██║███║   ██╔═████╗
    ██╔██╗ ██║██║   ██║██║   ██║███████║    ██║   ██║╚██║   ██║██╔██║
    ██║╚██╗██║██║   ██║╚██╗ ██╔╝██╔══██║    ╚██╗ ██╔╝ ██║   ████╔╝██║
    ██║ ╚████║╚██████╔╝ ╚████╔╝ ██║  ██║     ╚████╔╝  ██║██╗╚██████╔╝
    ╚═╝  ╚═══╝ ╚═════╝   ╚═══╝  ╚═╝  ╚═╝      ╚═══╝   ╚═╝╚═╝ ╚═════╝ 
                                                                
    `
));
		
  	
	}, 5000);
});



client.on('message', async (msg) => {

});



client.initialize();
