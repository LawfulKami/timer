const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = function(input) {
  console.log(`This message will self destruct in :`);
  for (let time = 0; time < input; time++) {
    setTimeout(() => {
      process.stdout.write(`${input - time} \n`);
      if (time === input - 1) {
        console.log("Kabooom!!!");
      }
    }, time * 1000);
  }
};

stdin.on('data', (key) => {
  if (key > 0 && key < 10) {
    timer(key);
  }

  if (key === "b") {
    console.log("BEEEEP");
  }

  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});


