const args = process.argv.slice(2);

const timer = function(input) {
  let alarms = [];
  for (const ele of input) {
    alarms.push(Number(ele));
  }

  alarms = alarms.filter(alarm => !Number.isNaN(alarm));
  
  if (alarms.length === 0) {
    console.log("No alarm set!");
  } else {
    for (let time = 1; time < (Math.max(...alarms) + 1); time++) {
      setTimeout(() => {
        process.stdout.write(`${time} \n`);
        if (alarms.includes((time))) {
          process.stdout.write("BEEEEP!!! \n");
        }
      }, time * 1000);
    }
  }
};

timer(args);