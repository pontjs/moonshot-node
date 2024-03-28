type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

export namespace defs {
  export type ChatCompletionRequest = {
    /** 频率惩罚，介于-2.0到2.0之间的数字。 */
    frequency_penalty?: number;
    /** 聊天完成时生成的最大 token 数。 */
    max_tokens?: number;
    /** 包含迄今为止对话的消息列表。 */
    messages: Array<{
      /** 消息的具体内容。 */
      content?: string;
      /** 消息的发送者角色。 */
      role?: 'system' | 'user' | 'assistant' }>;
    /** Model ID, 可以通过 List Models 获取。 */
    model: 'moonshot-v1-8k' | 'moonshot-v1-32k' | 'moonshot-v1-128k';
    /** 为每条输入消息生成多少个结果。 */
    n?: number;
    /** 存在惩罚，介于-2.0到2.0之间的数字。 */
    presence_penalty?: number;
    /** 停止词，当全匹配这个（组）词后会停止输出。 */
    stop?: Array<string>;
    /** 使用什么采样温度，介于 0 和 1 之间。 */
    temperature?: number;
    /** 另一种采样温度。 */
    top_p?: number;
  }

  export type ChatCompletionResponse = {
    /** 完成的选项数组。 */
    choices?: Array<{
      /** 完成的原因。 */
      finish_reason?: 'stop' | 'length';
      /** 选项的索引。 */
      index?: number;
      message?: {
        /** 消息的具体内容。 */
        content?: string;
        /** 消息的发送者角色。 */
        role?: 'assistant' | 'user' } }>;
    /** 创建时间的时间戳。 */
    created?: number;
    /** Completion的唯一标识符。 */
    id?: string;
    /** 使用的模型ID。 */
    model?: 'moonshot-v1-8k' | 'moonshot-v1-32k' | 'moonshot-v1-128k';
    /** 对象的类型，对于聊天完成事件应为 'chat.completion'。 */
    object?: 'chat.completion';
    usage?: {
      /** 完成使用的token数量。 */
      completion_tokens?: number;
      /** 提示使用的token数量。 */
      prompt_tokens?: number;
      /** 总使用的token数量。 */
      total_tokens?: number };
  }

  export type ChatCompletionStreamRequest = {
    /** 频率惩罚，介于-2.0到2.0之间的数字。 */
    frequency_penalty?: number;
    /** 聊天完成时生成的最大 token 数。 */
    max_tokens?: number;
    /** 包含迄今为止对话的消息列表。 */
    messages: Array<{
      /** 消息的具体内容。 */
      content?: string;
      /** 消息的发送者角色。 */
      role?: 'system' | 'user' | 'assistant' }>;
    /** Model ID, 可以通过 List Models 获取。 */
    model: 'moonshot-v1-8k' | 'moonshot-v1-32k' | 'moonshot-v1-128k';
    /** 为每条输入消息生成多少个结果。 */
    n?: number;
    /** 存在惩罚，介于-2.0到2.0之间的数字。 */
    presence_penalty?: number;
    /** 停止词，当全匹配这个（组）词后会停止输出。 */
    stop?: Array<string>;
    /** 使用什么采样温度，介于 0 和 1 之间。 */
    temperature?: number;
    /** 另一种采样温度。 */
    top_p?: number;
  }

  export type CreateFileRequest = {
    /** The File object (not file name) to be uploaded.
     */
    file: string;
    /** The intended purpose of the uploaded file.

    Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning) and "assistants" for [Assistants](/docs/api-reference/assistants) and [Messages](/docs/api-reference/messages). This allows us to validate the format of the uploaded file is correct for fine-tuning.
     */
    purpose: 'fine-tune' | 'assistants';
  }

  export type DeleteFileResponse = {
    deleted: boolean;
    id: string;
    object: 'file';
  }

  export type ListFilesResponse = {
    data: Array<defs.OpenAIFile>;
    object: 'list';
  }

  export type ListModelsResponse = {
    data: Array<defs.Model>;
    object: 'list';
  }

  export type Model = {
    /** The Unix timestamp (in seconds) when the model was created. */
    created: number;
    /** The model identifier, which can be referenced in the API endpoints. */
    id: string;
    /** The object type, which is always "model". */
    object: 'model';
    /** The organization that owns the model. */
    owned_by: string;
  }

  export type OpenAIFile = {
    /** The size of the file, in bytes. */
    bytes: number;
    /** The Unix timestamp (in seconds) for when the file was created. */
    created_at: number;
    /** The name of the file. */
    filename: string;
    /** The file identifier, which can be referenced in the API endpoints. */
    id: string;
    /** The object type, which is always `file`. */
    object: 'file';
    /** The intended purpose of the file. Supported values are `fine-tune`, `fine-tune-results`, `assistants`, and `assistants_output`. */
    purpose: 'fine-tune' | 'fine-tune-results' | 'assistants' | 'assistants_output';
    /** Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`. */
    status: 'uploaded' | 'processed' | 'error';
    /** Deprecated. For details on why a fine-tuning training file failed validation, see the `error` field on `fine_tuning.job`. */
    status_details?: string;
  }
}

export namespace API {
    export namespace chat {
    /**
     * POST /chat/completions
     * @title: AI Chat Completion
     */
    export namespace createCompletion {
      export type Params = {};
      export type method = 'POST';
      export type bodyParams = defs.ChatCompletionRequest;
      export type APIResponse = defs.ChatCompletionResponse;
    }

    /**
     * POST /chat/completions
     * @title: AI Chat Completion
     */
    export namespace createStreamChatCompletion {
      export type Params = {};
      export type method = 'POST';
      export type bodyParams = defs.ChatCompletionStreamRequest;
      export type APIResponse = object;
    }
  }

  export namespace models {
    /**
     * GET /models
     * @title: List Models
     */
    export namespace list {
      export type Params = {};
      export type method = 'GET';
      export type bodyParams = undefined;
      export type APIResponse = defs.ListModelsResponse;
    }
  }

  export namespace files {
    /**
     * GET /files
     * @title: List Files
     */
    export namespace list {
      export type Params = {};
      export type method = 'GET';
      export type bodyParams = undefined;
      export type APIResponse = defs.ListFilesResponse;
    }

    /**
     * POST /files
     * @summary: Upload a file that can be used across various endpoints. The size of all the files uploaded by one organization can be up to 100 GB.

    The size of individual files can be a maximum of 512 MB or 2 million tokens for Assistants. See the [Assistants Tools guide](/docs/assistants/tools) to learn more about the types of files supported. The Fine-tuning API only supports `.jsonl` files.

    Please [contact us](https://help.openai.com/) if you need to increase these storage limits.

     */
    export namespace createFile {
      export type Params = {};
      export type method = 'POST';
      export type bodyParams = defs.CreateFileRequest;
      export type APIResponse = defs.OpenAIFile;
    }

    /**
     * DELETE /files/{file_id}
     * @title: 删除文件
     */
    export namespace deleteFile {
      export type Params = {
        /** The ID of the file to use for this request. */
        file_id: string;
      };
      export type method = 'DELETE';
      export type bodyParams = undefined;
      export type APIResponse = defs.DeleteFileResponse;
    }

    /**
     * GET /files/{file_id}
     * @title: 获取文件信息
     */
    export namespace retrieve {
      export type Params = {
        /** The ID of the file to use for this request. */
        file_id: string;
      };
      export type method = 'GET';
      export type bodyParams = undefined;
      export type APIResponse = defs.OpenAIFile;
    }

    /**
     * GET /files/{file_id}/content
     * @summary: 获取文件内容
     */
    export namespace download {
      export type Params = {
        /** The ID of the file to use for this request. */
        file_id: string;
      };
      export type method = 'GET';
      export type bodyParams = undefined;
      export type APIResponse = string;
    }
  }

  export namespace tokenizers {
    /**
     * POST /tokenizers/estimate-token-count
     * @title: 计算 Token
     */
    export namespace estimate {
      export type Params = {};
      export type method = 'POST';
      export type bodyParams = defs.ChatCompletionRequest;
      export type APIResponse = {
        data?: {
          total_tokens?: number } };
    }
  }
}
