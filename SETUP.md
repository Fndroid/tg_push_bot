## 如何在ECS/VPS上搭建Bot Server

### 获取Bot token

点击[@BotFather](https://telegram.me/BotFather)，按步骤创建自己的Bot获取Token

### 下载/Clone仓库代码

```
git clone https://github.com/Fndroid/tg_push_bot.git

cd tg_push_bot
```

### 创建Sqlite3数据库 bot.db

```
// bot.db
sqlite3 bot.db

sqlite> CREATE TABLE users (chatId int unique, chatToken text unique);
sqlite> .quit
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

bot.token = 'https://api.telegram.org/bot{token}/' // BotFather返回的Token，以/结尾

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

### 设置Bot webhook地址

访问 https://api.telegram.org/bot{token}/setWebhook?url=https://{domain}/inlineQuery

检查webhook是否正常 https://api.telegram.org/bot{token}/getWebhookInfo

### 使用Nginx反向代理(不占用443端口)
1. 修改server.js的197端口为8443
2. 执行``pm2 restart server.js``重启服务端
3. 创建nginx server配置
```
server {
  listen 443 ssl http2;
  ssl_certificate /usr/local/nginx/conf/ssl/ssl.cer;
  ssl_certificate_key /usr/local/nginx/conf/ssl/ssl.key;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_timeout 10m;
  ssl_session_cache builtin:1000 shared:SSL:10m;
  ssl_buffer_size 1400;
  add_header Strict-Transport-Security max-age=15768000;
  ssl_stapling on;
  ssl_stapling_verify on;
  server_name your.domain;
  #access_log /data/wwwlogs/your.domain_nginx.log combined;
  
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header Host $http_host;
  proxy_set_header X-NginX-Proxy true;

  proxy_redirect off;
  # Socket.IO Support
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";

  location / {
    proxy_pass https://127.0.0.1:8443;
  }
}
```
