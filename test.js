const fetch = require('node-fetch')


// most @actions toolkit packages have async methods
async function run() {
  try {

    let result = await new Promise(resolve => {
      fetch('https://okex.me/api/swap/v3/instruments').then(res => res.json())
      .then(res => {
        resolve(res[0])
      })
    })

    console.log(111, JSON.stringify(result, null, 2)); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
  } catch (error) {
  }
}

run();