const five = require('johnny-five');
const board = five.Board();

board.on('ready',()=>{
   const led = new five.Led(12);
   led.blink(500);
});