const five = require("johnny-five");
const raspio = require("raspi-io").RaspiIO;

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  let count = 0;

  const trafficLightSwitch = {
    red: 10,
    green: 20,
    yellow: 23,
  };

  const redLed = new five.Led("P1-12");
  const yellowLed = new five.Led("P1-7");
  const greenLed = new five.Led("P1-11");

  setInterval(() => {
    // Set Red to On
    if (count <= trafficLightSwitch.red) {
      count++;
      redLed.on();
      yellowLed.off();
      greenLed.off();
      console.log("tick", count);
    }

    // Set Green to On
    if (count <= trafficLightSwitch.green && count > trafficLightSwitch.red) {
      count++;
      redLed.off();
      yellowLed.off();
      greenLed.on();
      console.log("tick", count);
    }

    // Set Yellow to On
    if (
      count <= trafficLightSwitch.yellow &&
      count > trafficLightSwitch.green
    ) {
      count++;
      redLed.off();
      yellowLed.on();
      greenLed.off();
      console.log("tick", count);
    }

    // Set count back to 1
    if (count > trafficLightSwitch.green) {
      count = 0;
    }
  }, 1000);
});

const switchLights = () => {};
