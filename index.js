const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
  try {
    // const ms = core.getInput('milliseconds');
    core.info(`Waiting ${'ms'} milliseconds ...`);

    console.log((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();