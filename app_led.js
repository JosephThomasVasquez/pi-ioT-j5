const five = require("johnny-five");
const raspio = require("raspi-io").Raspio();

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  const led = five.Led(12);
});
