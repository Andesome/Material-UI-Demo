export const API_URL = "https://testapi.liaolunling.top/api/blog";
export const SSO_URL = "https://sso.liaolunling.top/api"; // sso接口地址
export const SSO_FRONT = "https://sso.liaolunling.top/#"; // sso前端地址

// 文字裁剪字符长度
export const MAX_CHAR_LENGTH = 200;

// 接口请求状态码
export const SUCCESS_STATUS = 200; // 操作成功
export const FAIL_STATUS = 10001; // 操作失败
export const NO_TOKEN = 20001; // token不存在
export const EXPIRED_TOKEN = 20002; // token过期
export const ILLEGAL_TOKEN = 20003; // 非法token
export const LOGIN_TIMEOUT = 20004; // 登录超时
export const NO_AUTH = 30001; // 无权限
