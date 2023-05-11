const sorted = process.argv.slice(2).sort((a, b) => a - b);

for (let i = 0; i < sorted.length; i++) {
  if (isNaN(sorted[i]) || sorted[i] < 0) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, sorted[i] * 1000);
}