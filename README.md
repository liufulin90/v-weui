# v-weui

[![npm package][npm-badge]][npm] [![npm downloads][downloads-badge]][npm]

> 使用Vue2封装，为微信Web服务量身设计（Work with WeUI 0.4.0+）

## 特点

* 使用Vue封装了WeUI的所有组件
* 通过npm安装，可以一次引入所有组件，也可选择只引入需要的组件
* 不带一行css，与WeUI样式完全解绑，可以方便地进行自定义

## 预览

![qr-of-examples](./docs/images/qr-of-examples.png)

扫描二维码在手机查看

或直接访问 [http://weui.linxins.com/](http://weui.linxins.com/)

## 安装

### 安装v-weui

```
npm install v-weui --save
```

## 使用

### 引用

#### ES6

```javascript
// 引入css样式
import 'v-weui/components/less/weui.less';

// 引用所有组件
import VWeui from 'v-weui';

export default {
  components: VWeui
};

// 引用部分组件
import {Dialog} from 'v-weui';
// 或
// 只引用需要的文件，减少文件大小
import Dialog from 'v-weui/components/dialog/dialog.vue';

export default {
  components: {
    Dialog
  }
};

```

#### CommonJS

```javascript
var Dialog = require('v-weui').Dialog;
// 或
var Dialog = require('v-weui/components/dialog/dialog.vue');

new Vue({
  components: {
    'dialog': Dialog
  }
});
```

### 组件列表和使用说明

[点击查看组件列表](./docs/components.md)

## 查看示例

```
git clone https://github.com/liufulin90/v-weui.git
cd v-weui && npm install
npm run dev

open http://localhost:8080 in browser
```

## 变更日志

[点击查看变更日志](./docs/CHANGELOG.md)

## 反馈

有任何意见和建议请提交[issue](https://github.com/liufulin90/v-weui/issues)或[PR](https://github.com/liufulin90/v-weui/pulls)，谢谢。

[npm-badge]: https://img.shields.io/npm/v/v-weui.svg?style=flat-square
[npm]: https://www.npmjs.com/package/v-weui

[downloads-badge]: https://img.shields.io/npm/dm/v-weui.svg?style=flat-square
