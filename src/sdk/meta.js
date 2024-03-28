const specMeta = {
  "apis": {
    "chat": {
      "createCompletion": {
        "method": "POST",
        "hasBody": true,
        "hasParams": false,
        "consumes": [],
        "produces": [],
        "apiName": "createCompletion",
        "path": "/chat/completions",
        "specName": "single",
        "controllerName": "chat"
      },
      "createStreamChatCompletion": {
        "method": "POST",
        "hasBody": true,
        "hasParams": false,
        "consumes": [],
        "produces": [
          "application/octet-stream"
        ],
        "apiName": "createStreamChatCompletion",
        "path": "/chat/completions",
        "specName": "single",
        "controllerName": "chat"
      }
    },
    "models": {
      "list": {
        "method": "GET",
        "hasBody": false,
        "hasParams": false,
        "consumes": [],
        "produces": [],
        "apiName": "list",
        "path": "/models",
        "specName": "single",
        "controllerName": "models"
      }
    },
    "files": {
      "list": {
        "method": "GET",
        "hasBody": false,
        "hasParams": false,
        "consumes": [],
        "produces": [],
        "apiName": "list",
        "path": "/files",
        "specName": "single",
        "controllerName": "files"
      },
      "createFile": {
        "method": "post",
        "hasBody": true,
        "hasParams": false,
        "consumes": [
          "multipart/form-data"
        ],
        "apiName": "createFile",
        "path": "/files",
        "specName": "single",
        "controllerName": "files"
      },
      "deleteFile": {
        "method": "delete",
        "hasBody": false,
        "hasParams": true,
        "consumes": [],
        "apiName": "deleteFile",
        "path": "/files/{file_id}",
        "specName": "single",
        "controllerName": "files"
      },
      "retrieve": {
        "method": "get",
        "hasBody": false,
        "hasParams": true,
        "consumes": [],
        "apiName": "retrieve",
        "path": "/files/{file_id}",
        "specName": "single",
        "controllerName": "files"
      },
      "download": {
        "method": "get",
        "hasBody": false,
        "hasParams": true,
        "consumes": [],
        "apiName": "download",
        "path": "/files/{file_id}/content",
        "specName": "single",
        "controllerName": "files"
      }
    },
    "tokenizers": {
      "estimate": {
        "method": "POST",
        "hasBody": true,
        "hasParams": false,
        "consumes": [],
        "produces": [],
        "apiName": "estimate",
        "path": "/tokenizers/estimate-token-count",
        "specName": "single",
        "controllerName": "tokenizers"
      }
    }
  },
  "hasController": true,
  "specName": "single",
  "basePath": "/v1",
  "host": "api.moonshot.cn",
  "securitySchemes": {
    "ApiKeyAuth": {
      "scheme": "bearer",
      "type": "http"
    }
  },
  "security": [
    {
      "ApiKeyAuth": []
    }
  ]
};
export default specMeta;