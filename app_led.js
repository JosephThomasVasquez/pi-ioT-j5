const five = require("johnny-five");
const raspio = require("raspi-io").RaspiIO;

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  const led = new five.Led("PI-12");

  led.on();
});
