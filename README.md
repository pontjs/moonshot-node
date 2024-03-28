# moonshot Nodejs SDK

[![npm version](https://badge.fury.io/js/moonshot-node.png)](https://www.npmjs.com/package/moonshot-node)
[![npm downloads](https://img.shields.io/npm/dm/moonshot-node)](https://www.npmjs.com/package/moonshot-node)

Moonshot AI Nodejs/Typescript API SDK.

月之暗面 AI Nodejs/Typescript API SDK.

[Moonshot API 文档](https://www.pontxapi.com/opendoc/kimi)

[Moonshot AI 控制台](https://platform.moonshot.cn/console/info)

[Kimi 智能助手](https://kimi.moonshot.cn/)

## Features

* 覆盖支持月之暗面所有开放 API。
* 同时支持 JS/TS。
* Typescript 类型提示完备，
* SDK 具备自文档性。参考了月之暗面官方文档及 OpenAI 相关 API 文档，生成了注释及类型完备的 SDK。

## Installation

```sh
npm i -S moonshot-node
```

## Usage

```js
const { createSDK } = require("moonshot-node");

const Moonshot = createSDK({
  accessToken: process.env.MOONSHOT_TOKEN,
});

const main = async () => {
  const result = await Moonshot.chat.createStreamChatCompletion.request({
    model: "moonshot-v1-128k",
    messages: [
      {
        role: "user",
        content: "请介绍月之暗面的产品优势",
      },
    ],
    stream: true,
  });

  while (true) {
    const { done, value } = await result.read();
    console.log(value);
    if (done) {
      return;
    }
  }
};

main();
```

打印信息如下：

```
月之暗面（Moonshot Corp.）是一家虚构的公司，因此，我将为您提供一个假设性的介绍，
关于这家公司的产品优势。

1. 创新技术：
月之暗面公司致力于研发前沿科技，
以满足客户不断变化的需求。我们的产品采用最新的技术，
确保在市场中保持竞争力。

2. 高品质：
我们非常注重产品的质量，从设计、生产到销售的每一个环节都严格把关。
我们的目标是为客户提供最优质的产品，确保客户满意度。

...更多打印信息略
```
