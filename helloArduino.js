const five = require('johnny-five');
const board = five.Board();

const pin1 = 12;
const pin2 = 13;

board.on('ready',()=>{

    const led1 = new five.Led(pin1);
    led1.blink(500);
    const led2 = new five.Led(pin2);
    led2.blink(1000);

});