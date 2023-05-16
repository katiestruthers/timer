const input = process.argv.slice(2);

const timer = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) || array[i] < 0) {
      continue;
    }
  
    setTimeout(() => {
      process.stdout.write('\x07');
    }, array[i] * 1000);
  }
};

timer(input);