const five = require("johnny-five");
const raspio = require("raspi-io").RaspiIO;

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  let count = 1;

  const redLed = new five.Led("P1-12");
  const yellowLed = new five.Led("P1-7");
  const greenLed = new five.Led("P1-11");

  redLed.off();
  yellowLed.off();
  greenLed.off();

  if (count === 1) {
    console.log("count Red", count);
    redLed.on();
    setTimeout(function () {
      redLed.off();
      count++;
      console.log("count Yellow", count);
      yellowLed.on();
      setTimeout(function () {
        yellowLed.off();
        count++;
        console.log("count Green", count);
        greenLed.on();
        setTimeout(function () {
          greenLed.off();
          count = 1;
        }, 10000);
      }, 2000);
    }, 10000);
  }
});
