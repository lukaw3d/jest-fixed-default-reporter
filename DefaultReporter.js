// @ts-check

const { DefaultReporter } = require('@jest/reporters');

class FixedDefaultReporter extends DefaultReporter {
  log(message) {
    process.stdout.write(`${message}\n`);
  }

  printTestFileFailureMessage(...args) {
    const origLog = this.log;
    try {
      this.log = (message) => process.stderr.write(`${message}\n`);
      return super.printTestFileFailureMessage(...arguments);
    } finally {
      this.log = origLog;
    }
  }

  printTestFileHeader(_testPath, config, result) {
    const origLog = this.log;
    try {
      if (result.numFailingTests > 0 || result.testExecError) {
        this.log = (message) => process.stderr.write(`${message}\n`);
      }
      return super.printTestFileHeader(...arguments);
    } finally {
      this.log = origLog;
    }
  }
}

module.exports = FixedDefaultReporter;
