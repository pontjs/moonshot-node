const { createSDK } = require("../");

const Moonshot = createSDK({
  accessToken: process.env.KIMI_TOKEN,
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
  try {
    while (true) {
      const { done, value } = await result.readContent();
      process.stdout.write(value);
      if (done) {
        return;
      }
    }
  } catch (e) {
    console.log(e);
  }
};

main();
