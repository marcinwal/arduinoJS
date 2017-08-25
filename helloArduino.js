const five = require('johnny-five');
const board = five.Board();

const pin1 = 12;
// const pin2 = 13;

board.on('ready',()=>{

    let blinkCount = 0;
    const blinkMax = 10;

    const led1 = new five.Led(pin1);
    // const led2 = new five.Led(pin2);

    // led1.blink(500);
    // led2.blink(1000);

    led1.blink(500, () =>{
       blinkCount++;
       console.log(`Blinked: ${blinkCount}`);  // `` instead of ''
       if(blinkCount >= blinkMax){
           console.log('stopping..');
           led1.stop();
       }
    });

});