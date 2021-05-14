# Fixed jest DefaultReporter
By default, Jest is using `stderr` as output https://github.com/facebook/jest/issues/5064

This is a tiny wrapper around jest DefaultReporter (and SummaryReporter) that prints
success messages to stdout and errors to stderr

## Use
```bash
npm install --save-dev jest-fixed-default-reporter
jest --reporters=jest-fixed-default-reporter/FixedDefaultReporter,jest-fixed-default-reporter/FixedSummaryReporter
```

or
```bash
yarn add --save-dev jest-fixed-default-reporter

jest.config.js:
{
  "reporters": ["jest-fixed-default-reporter/FixedDefaultReporter", "jest-fixed-default-reporter/FixedSummaryReporter"]
}
```


## Inspiration
`jest-standard-reporter` seemed like way too much code to maintain https://github.com/chrisgalvan/jest-standard-reporter
