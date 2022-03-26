const five = require("johnny-five");
const raspio = require("raspi-io").RaspiIO;

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  let count = 1;

  const redLed = new five.Led("P1-11");
  const yellowLed = new five.Led("P1-7");
  const greenLed = new five.Led("P1-11");

  redLed.off();
  yellowLed.off();
  greenLed.off();

  if (count === 1) {
    redLed.on();
    setTimeout(function () {
      redLed.off();
      yellowLed.on();
      setTimeout(function () {
        yellowLed.off();
        greenLed.on();
        setTimeout(function () {
          greenLed.off();
          count = 1;
        }, 10000);
        count++;
      }, 2000);
      count++;
    }, 10000);
  }
});
