// ErrorTuple and ErrorEnum
const ErrorEnum = {
  IP_BLOCK: { code: 300012, msg: "网络连接异常，请检查网络设置或重启试试" },
  NOTE_ABNORMAL: { code: -510001, msg: "笔记状态异常，请稍后查看" },
  NOTE_SECRETE_FAULT: { code: -510001, msg: "当前内容无法展示" },
  SIGN_FAULT: { code: 300015, msg: "浏览器异常，请尝试关闭/卸载风险插件或重启试试！" },
  SESSION_EXPIRED: { code: -100, msg: "登录已过期" }
};

// Custom error classes
class DataFetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataFetchError";
  }
}

class IPBlockError extends Error {
  constructor(message) {
    super(message);
    this.name = "IPBlockError";
  }
}

class SignError extends Error {
  constructor(message) {
    super(message);
    this.name = "SignError";
  }
}

class NeedVerifyError extends Error {
  constructor(message, verifyType = null, verifyUuid = null) {
    super(message);
    this.name = "NeedVerifyError";
    this.verifyType = verifyType;
    this.verifyUuid = verifyUuid;
  }
}

module.exports = {
  ErrorEnum,
  DataFetchError,
  IPBlockError,
  SignError,
  NeedVerifyError
};
    