<h1 align="center">xhs-js</h1>

小红书逆向api的js实现.
🌟**点个star🌟再走吧~**🌟

## 免责声明

本项目出于学习目的，旨在了解爬虫和反爬虫的机制，请勿用于非法用途，否则后果自负。

示例可参考:
- [example/index.js](./example/index.js)
- [test/xhs.test.js](./test/xhs.test.js)


## 本地测试

```
npm install
# 替换test/xhs.test.js中的cookie
npm run test

```

## API

- getNoteById: 获取笔记详情
- getNoteByIdFromHtml: 从html中获取笔记详情
- getSelfInfo: 获取账号个人信息
- getUserInfo: 获取指定用户信息
- getNoteByKeyword: 根据关键词搜索笔记
- getNoteComments: 获取笔记评论
- getUserNotes: 获取用户笔记

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=saifeiLee/xhs-js&type=Date)](https://star-history.com/#saifeiLee/xhs-js&Date)