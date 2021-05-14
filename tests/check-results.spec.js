const fs = require('fs');

test('good results should print to stdout', () => {
  expect(fs.readFileSync(__dirname + '/results/good_stdout.txt', 'utf-8')).toBeTruthy();
  expect(fs.readFileSync(__dirname + '/results/good_stderr.txt', 'utf-8')).toBeFalsy();
});

test('bad results should print to stderr', () => {
  expect(fs.readFileSync(__dirname + '/results/bad_stdout.txt', 'utf-8')).toBeFalsy();
  expect(fs.readFileSync(__dirname + '/results/bad_stderr.txt', 'utf-8')).toBeTruthy();
});

test('mixed results should print to stderr', () => {
  expect(fs.readFileSync(__dirname + '/results/mixed_stderr.txt', 'utf-8')).toBeTruthy();
});
