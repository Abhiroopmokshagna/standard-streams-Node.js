process.stdin.once('data', function (data) {
  console.log('You said your name is ' + data);
  process.stdin.pause();
});

console.log('What is your name?');
process.stdin.setEncoding('utf8'); // Encoding is set to remove toString's necessity
process.stdin.resume();
