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
    /** 要上传的文件对象（不是文件名）。
     */
    file: string;
    /** 上传文件的预期用途。

    使用"fine-tune"进行[微调](/docs/api-reference/fine-tuning)，使用"assistants"进行[助手](/docs/api-reference/assistants)和[消息](/docs/api-reference/messages)。这样可以验证上传文件的格式是否正确用于微调。
     */
    purpose: 'fine-tune' | 'assistants';
  }

  export type DeleteFileResponse = {
    /** 表示文件是否已被成功删除 */
    deleted: boolean;
    /** 文件的唯一标识符 */
    id: string;
    /** 对象类型，此处为文件 */
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
    /** 模型创建的 Unix 时间戳（以秒为单位）。 */
    created: number;
    /** 模型标识符，可在 API 端点中引用。 */
    id: string;
    /** 对象类型，始终为“model”。 */
    object: 'model';
    /** 拥有模型的组织。 */
    owned_by: string;
  }

  export type OpenAIFile = {
    /** 文件大小，以字节为单位。 */
    bytes: number;
    /** 文件创建的Unix时间戳（以秒为单位）。 */
    created_at: number;
    /** 文件名。 */
    filename: string;
    /** 文件标识符，可在API端点中引用。 */
    id: string;
    /** 对象类型，始终为`文件`。 */
    object: 'file';
    /** 文件的预期用途。支持的值为`fine-tune`、`fine-tune-results`、`assistants`和`assistants_output`。 */
    purpose: 'fine-tune' | 'fine-tune-results' | 'assistants' | 'assistants_output';
    /** 已弃用。文件的当前状态，可以是`uploaded`、`processed`或`error`。 */
    status: 'uploaded' | 'processed' | 'error';
    /** 已弃用。有关为什么微调训练文件未通过验证的详细信息，请参阅`fine_tuning.job`上的`error`字段。 */
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

  export namespace files {
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
     * GET /files/{file_id}
     * @title: 获取文件信息
     */
    export namespace retrive {
      export type Params = {
        /** The ID of the file to use for this request. */
        file_id: string;
      };
      export type method = 'GET';
      export type bodyParams = undefined;
      export type APIResponse = defs.OpenAIFile;
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
