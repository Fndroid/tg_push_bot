## 如何在ECS/VPS上搭建Bot Server

### 下载/Clone仓库代码

```
git clone https://github.com/Fndroid/tg_push_bot.git

cd tg_push_bot
```

### 创建Sqlite3数据库 bot.db

```
// bot.db

CREATE TABLE users (chatId int unique, chatToken text unique);
```

### 创建配置文件 config.js

```js
// config.js

https = {}
bot = {}
ui = {}

https.domain = '' // 域名
https.privateKey = 'xxx.key' // Key文件
https.certificate = 'xxx.crt' // CSR文件

bot.token = '' // BotFather返回的Token，以/结尾

ui.startHint = '' // 用户发送/start时返回的内容，%s表示用户唯一URL
ui.userNotExistHint = '' // 用户不存在时的返回内容
ui.httpsTestHint = 'hello from nodejs with https'
ui.errorHint = '' // 错误提示

module.exports = {
    https: https,
    bot: bot,
    ui: ui
}
```

### 安装Node.js环境

1. 安装Nodejs，参考[Download Node.js](https://nodejs.org/en/download/current/)
2. 执行``npm install``安装依赖（与``package.json``同目录下）
3. 执行``npm install -g pm2``安装pm2模块
4. 执行``pm2 start server.js``启动服务端
