process.stdout.write('prompt >');
process.stdin.on('data', (data) => {const cmd = data.toString().trim()
  // process.stdout.write('you typed: ' + cmd);
  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());
  }
  process.stdout.write('\nprompt >');
});

