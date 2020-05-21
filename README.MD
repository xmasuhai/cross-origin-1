# 代码使用方法

0.安装 node-dev

```bash
yarn global add node-dev
```

1.下载代码

[代码链接](https://github.com/FrankFang/kuayu-1)

2.进入 qq-com 运行 server.js

```bash
cd cross-origin-1/qq-com
node-dev server.js 8888
```

3.进入 cross-origin-1/frank-com 运行 server.js

```bash
cd ../frank-com; node-dev server.js 9999
```

4.设置 hosts

```bash
 127.0.0.1 qq.com
 127.0.0.1 frank.com
```

5.打开两个页面

> 创建 qq.com:8888 和 frank.com:9999，然后在 frank.com 用 AJAX 请求 qq.com 的 /friends.json
>
> 要求使用 CORS。成功请求到之后请对响应头

- qq.com:8888/index.html

> 创建 qq.com:8888 和 frank.com:9999，然后在 frank.com 用 JSONP 请求 qq.com 的 /friends.js
>
> 要求使用 JSONP。成功请求到之后请对响应体

- frank.com:9999/index.html

6.记得做完之后，删掉 hosts 里的两行，否则 qq.com 无法正常访问！
