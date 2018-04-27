import requests

url = 'https://tgbot.lbyczf.com/sendMessage/xxx'
form = { 'text': 'Hello world!' }

resp = requests.post(url, data=form)
print(resp)