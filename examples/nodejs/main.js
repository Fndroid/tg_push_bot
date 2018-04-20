const request = require('request')

const url = 'https://tgbot.lbyczf.com/sendMessage/xxx'
const form = { form: { text: 'Hello world!' } }

request.post(url, form, (err, resp, body) => {
    console.log(resp)
})