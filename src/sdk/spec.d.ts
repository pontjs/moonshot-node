import type { API, defs } from './type.d.ts';
import { provider } from './request';

type SDKMethods2<Method, Response> = ReturnType<typeof provider.getSDKMethods<Method, Response>>;
type SDKMethods3<Method, Params, Response> = ReturnType<typeof provider.getSDKMethods<Method, Params, Response>>;
type SDKMethods4<Method, Params, BodyParams, Response> = ReturnType<
  typeof provider.getSDKMethods<Method, Params, BodyParams, Response>
>;

type OctetStreamSDKMethods3<Method, Params, Response> = ReturnType<typeof provider.getOctetStreamSDKMethods<Method, Params, Response>>;
type OctetStreamSDKMethods4<Method, Params, BodyParams, Response> = ReturnType<
  typeof provider.getOctetStreamSDKMethods<Method, Params, BodyParams, Response>
>;

type EventStreamSDKMethods2<Method, Response> = ReturnType<typeof provider.getEventStreamSDKMethods<Method, Response>>;
type EventStreamSDKMethods3<Method, Params, Response> = ReturnType<typeof provider.getEventStreamSDKMethods<Method, Params, Response>>;
type EventStreamSDKMethods4<Method, Params, BodyParams, Response> = ReturnType<
  typeof provider.getEventStreamSDKMethods<Method, Params, BodyParams, Response>
>;

export namespace APIs {
  export namespace chat {
    /**
     * POST /chat/completions
     * @title: AI Chat Completion
     */
    export const createCompletion: SDKMethods3<
      API.chat.createCompletion.method,
      API.chat.createCompletion.bodyParams,
      API.chat.createCompletion.APIResponse
    >;

    /**
     * POST /chat/completions
     * @title: AI Chat Completion
     */
    export const createStreamChatCompletion: OctetStreamSDKMethods3<
      API.chat.createStreamChatCompletion.method,
      API.chat.createStreamChatCompletion.bodyParams,
      API.chat.createStreamChatCompletion.APIResponse
    >;
  }

  export namespace files {
    /**
     * POST /files
     * @summary: Upload a file that can be used across various endpoints. The size of all the files uploaded by one organization can be up to 100 GB.

    The size of individual files can be a maximum of 512 MB or 2 million tokens for Assistants. See the [Assistants Tools guide](/docs/assistants/tools) to learn more about the types of files supported. The Fine-tuning API only supports `.jsonl` files.

    Please [contact us](https://help.openai.com/) if you need to increase these storage limits.

     */
    export const createFile: SDKMethods3<
      API.files.createFile.method,
      API.files.createFile.bodyParams,
      API.files.createFile.APIResponse
    >;

    /**
     * DELETE /files/{file_id}
     * @title: 删除文件
     */
    export const deleteFile: SDKMethods3<
      API.files.deleteFile.method,
      API.files.deleteFile.Params,
      API.files.deleteFile.APIResponse
    >;

    /**
     * GET /files/{file_id}/content
     * @summary: 获取文件内容
     */
    export const download: SDKMethods3<
      API.files.download.method,
      API.files.download.Params,
      API.files.download.APIResponse
    >;

    /**
     * GET /files
     * @title: List Files
     */
    export const list: SDKMethods2<
      API.files.list.method,
      API.files.list.APIResponse
    >;

    /**
     * GET /files/{file_id}
     * @title: 获取文件信息
     */
    export const retrive: SDKMethods3<
      API.files.retrive.method,
      API.files.retrive.Params,
      API.files.retrive.APIResponse
    >;
  }

  export namespace models {
    /**
     * GET /models
     * @title: List Models
     */
    export const list: SDKMethods2<
      API.models.list.method,
      API.models.list.APIResponse
    >;
  }

  export namespace tokenizers {
    /**
     * POST /tokenizers/estimate-token-count
     * @title: 计算 Token
     */
    export const estimate: SDKMethods3<
      API.tokenizers.estimate.method,
      API.tokenizers.estimate.bodyParams,
      API.tokenizers.estimate.APIResponse
    >;
  }
}