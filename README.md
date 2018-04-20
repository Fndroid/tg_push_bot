# Telegram Push Notifications Bot Update Log
TG推送机器人更新日志

[点击添加Bot](https://t.me/notificationme_bot)

[示例](https://github.com/Fndroid/tg_push_bot/tree/master/examples)

### 2018.04.20

1. 增加POST请求支持，接受格式为``JSON``或``x-www-form-urlencoded``
2. 增加属性``parse_mode``、``reply_markup``和``disable_web_page_preview``设置，具体参考：[Telegram Bot API](https://core.telegram.org/bots/api#sendmessage)
3. 增加通过URL发送图片，字段为``photo``，参考：[Telegram Bot API](https://core.telegram.org/bots/api#sendphoto)，(如果有photo字段，则text自动理解为caption)
4. 请求改为同步返回并将对Telegram的请求响应直接回复给请求者
