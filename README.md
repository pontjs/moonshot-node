# moonshot Nodejs SDK

[![npm version](https://badge.fury.io/js/moonshot-node.png)](https://www.npmjs.com/package/moonshot-node)
[![npm downloads](https://img.shields.io/npm/dm/moonshot-node)](https://www.npmjs.com/package/moonshot-node)

Moonshot AI Nodejs/Typescript API SDK.

月之暗面 AI Nodejs/Typescript API SDK.

[Moonshot API 文档](https://www.pontxapi.com/opendoc/kimi)

[Moonshot AI 控制台](https://platform.moonshot.cn/console/info)

[Kimi 智能助手](https://kimi.moonshot.cn/)

Powered By [Pontx](https://www.pontxapi.com)

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
    const { done, value } = await result.readContent();
    process.stdout.write(value);
    if (done) {
      return;
    }
  }
};

main();
```

打印信息如下：

```
月之暗面（Moonshot Corp.）是一家虚构的公司，因此，我将为您提供一个假设性的产品优势介绍。请注意，以下信息并非基于现实中的公司或产品。

月之暗面的产品优势：

1. 创新技术：月之暗面致力于研发前沿科技，以满足客户不断变化的需求。我们的产品采用了最新的技术，确保在性能、效率和可靠性方面处于行业领先地位。

2. 定制解决方案：我们明白每个客户的需求都是独特的，因此我们提供定制化的解决方案，以满足不同行业和应用场景的需求。我们的专业团队将与您紧密合作，确保为您提供最佳的产品和服务。

...更多打印信息略
```
