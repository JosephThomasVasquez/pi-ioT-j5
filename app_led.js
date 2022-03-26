const five = require("johnny-five");
const raspio = require("raspi-io").RaspiIO;

const board = new five.Board({ io: new raspio() });

board.on("ready", function () {
  let count = 1;

  const trafficLightSwitch = {
    red: 10,
    green: 20,
    yellow: 22,
  };

  const redLed = new five.Led("P1-12");
  const yellowLed = new five.Led("P1-7");
  const greenLed = new five.Led("P1-11");

  setInterval(() => {
    // Set Red to On
    if (count <= trafficLightSwitch.red) {
      redLed.on();
      //   yellowLed.off();
      yellowLed.fadeOut({ duration: 250 });
      console.log("tick", count);
    }

    // Set Green to On
    if (count <= trafficLightSwitch.green && count > trafficLightSwitch.red) {
      greenLed.on();
      //   redLed.off();
      redLed.fadeOut({ duration: 250 });
      console.log("tick", count);
    }

    // Set Yellow to On
    if (
      count <= trafficLightSwitch.yellow &&
      count > trafficLightSwitch.green
    ) {
      yellowLed.on();
      //   greenLed.off();
      greenLed.fadeOut({ duration: 250 });
      console.log("tick", count);
    }

    // Set count back to 1
    if (count > trafficLightSwitch.yellow) {
      count = 1;
    } else {
      count++;
    }
  }, 1000);

  board.on("exit", () => {
    redLed.off();
    greenLed.off();
    yellowLed.off();
  });
});

const switchLights = () => {};
