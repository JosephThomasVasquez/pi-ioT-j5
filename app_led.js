const five = require("johnny-five");
const raspio = require("raspi-io").RaspiIO;

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  let count = 1;

  const trafficLightSwitch = {
    red: 10,
    yellow: 12,
    green: 22,
  };

  const redLed = new five.Led("P1-12");
  const yellowLed = new five.Led("P1-7");
  const greenLed = new five.Led("P1-11");
  //   five; //   greenLed.off(); //   yellowLed.off(); //   redLed.off();

  //   redLed.on();

  //   for (let i = 1; i < count; i++) {
  //     redLed.on();
  //     console.log("tick", count);
  //     setTimeout(() => {
  //       redLed.off();
  //     }, 1000);
  //   }

  setInterval(() => {
    // Set Red to On
    if (count <= trafficLightSwitch.red) {
      count++;
      redLed.on();
      yellowLed.off();
      greenLed.off();
      console.log("tick", count);
    }

    // Set Yellow to On
    if (count <= trafficLightSwitch.yellow && count > trafficLightSwitch.red) {
      redLed.off();
      yellowLed.on();
      greenLed.off();
      console.log("tick", count);
    }

    // Set Green to On
    if (
      count <= trafficLightSwitch.green &&
      count > trafficLightSwitch.yellow
    ) {
      redLed.off();
      yellowLed.off();
      greenLed.on();
      console.log("tick", count);
    }

    // Set count back to 1
    if (count > trafficLightSwitch.green) {
      count = 1;
    }
  }, 1000);

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
