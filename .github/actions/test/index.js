const core = require('@actions/core');
const fetch = require('node-fetch')


// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('milliseconds');
    core.info(`Waiting ${ms} milliseconds ...`);

    let result = await new Promise(resolve => {
      setTimeout(() => {
        resolve({ a: 1 })
      }, 1000)

      // fetch('https://okex.me/api/swap/v3/instruments').then(res => res.json())
      // .then(res => {
      //   resolve(res[0])
      // })
    })

    console.log(111, JSON.stringify(result, null, 2)); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    console.log(22,fetch)

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();