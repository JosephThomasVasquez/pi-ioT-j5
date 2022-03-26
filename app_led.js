const five = require("johnny-five");
const raspio = require("raspi-io").RaspiIO;

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  const count = 1;

  const redLed = new five.Led("P1-12");
  const yellowLed = new five.Led("P1-7");
  const greenLed = new five.Led("P1-11");

  if (count === 1) {
    redLed.on();
    setTimeout(function () {
      redLed.off();
      count++;
    }, 10000);

    yellowLed.on();
    setTimeout(function () {
      yellowLed.off();
      count++;
    }, 2000);

    greenLed.on();
    setTimeout(function () {
      greenLed.off();
      count = 1;
    }, 10000);
  }
});
