# Telegram Push Notifications Bot Update Log
TG推送机器人更新日志

[点我添加Bot](https://t.me/notificationme_bot) 

[Chrome插件](https://github.com/Fndroid/tg_notification_chrome)

### 推送消息


[Nodejs及Python示例](https://github.com/Fndroid/tg_push_bot/tree/master/examples)

```
// using get
curl -X GET https://tgbot.lbyczf.com/sendMessage/:Token?text=HelloWorld

// using post
curl -d "text=Helloworld&photo=https%3A%2F%2Fgithub.com%2FFndroid%2Ftg_push_bot%2Fblob%2Fmaster%2Fimgs%2Fphoto_2018-04-21_15-29-55.jpg%3Fraw%3Dtrue" -X POST https://tgbot.lbyczf.com/sendMessage/:Token
```


> GET调用的URL长度会有限制，所以如果要发送图片或者发送内容较长，请使用POST

### 隐私相关

Bot不会识别和储存任何用户推送的消息，只会将推送消息发送给Telegram服务器。Bot只会记录用户回话ID，此ID是向Telegram推送消息的凭据。

### 更新日志

#### 2018.04.20

1. 增加POST请求支持，接受格式为``JSON``或``x-www-form-urlencoded``
2. 增加属性``parse_mode``、``reply_markup``和``disable_web_page_preview``设置，具体参考：[Telegram Bot API](https://core.telegram.org/bots/api#sendmessage)
3. 增加通过URL发送图片，字段为``photo``，参考：[Telegram Bot API](https://core.telegram.org/bots/api#sendphoto)，(如果有photo字段，则text自动理解为caption)
4. 请求改为同步返回并将对Telegram的请求响应直接回复给请求者

#### 2018.04.21

1. 支持属性``disable_notification``，可以静默发送消息，采集记录用途

#### 2018.04.22

1. 增加Chrome插件支持，可以通过插件向Telegram推送图片、链接和文字内容，具体参考：[TG推送插件](https://github.com/Fndroid/tg_notification_chrome)

### 感谢支持
![感谢](https://raw.githubusercontent.com/Fndroid/jsbox_script/master/imgs/thankyou.jpg)