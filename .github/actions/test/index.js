const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch')


// most @actions toolkit packages have async methods
async function run() {
  try {
    // const ms = core.getInput('milliseconds');
    // core.info(`Waiting ${ms} milliseconds ...`);
console.log(888,JSON.stringify(github.context || {}))
console.log(999,JSON.stringify(core.getInput('inputs') || {}))
console.log(444,JSON.stringify(core.getInput('location') || {}))
    // let result = await new Promise(resolve => {
    //   // setTimeout(() => {
    //   //   resolve({ a: 1 })
    //   // }, 1000)

    //   fetch('https://api.github.com/repos/ouqinglai/pageWithApiDemo/issues/1').then(res => res.json())
    //   .then(res => {
    //     resolve({title: res.title})
    //   })
    // })

    // console.log(111, JSON.stringify(result, null, 2)); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();