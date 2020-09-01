const fetch = require('node-fetch')
,     HttpsProxyAgent = require('https-proxy-agent')
,     agent = new HttpsProxyAgent('http://127.0.0.1:10809')

fetch('https://api.github.com/repos/ouqinglai/pageWithApiDemo/actions/workflows', {
  agent
})
.then(res => res.json())
.then(res => {
  console.log(res)
})