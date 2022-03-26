const five = require("johnny-five");
const raspio = require("raspi-io").RaspiIO;

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  let count = 10;

  const redLed = new five.Led("P1-12");
  const yellowLed = new five.Led("P1-7");
  const greenLed = new five.Led("P1-11");
  //   five; //   greenLed.off(); //   yellowLed.off(); //   redLed.off();

  redLed.on();

  for (let i = 1; i < count; i++) {
    redLed.on();
    setTimeout(() => {
      redLed.off();
    }, 1000);
  }

  //   if (redLed.on()) {
  //     console.log("Red");

  //     setTimeout(function () {
  //       redLed.off();

  //       console.log("Yellow");
  //       yellowLed.on();
  //       setTimeout(function () {
  //         yellowLed.off();

  //         console.log("Green");
  //         greenLed.on();
  //         setTimeout(function () {
  //           greenLed.off();

  //           redLed.on();
  //         }, 10000);
  //       }, 2000);
  //     }, 10000);
  //   }
});

const switchLights = () => {};
