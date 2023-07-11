import axios from 'axios';

const requestApi = axios.create({
  baseURL: 'https://dev-apigw.vinhomes.vn',
  headers: { "content-type": "application/json" },
  timeout: 60 * 1000,
  timeoutErrorMessage: 'TIMEOUT_LIMITED',
});
const post = (path, params = {}) => {
  return requestApi.post(path, {
    ...params
  });
}

export const confirmOrder = (queryString) => {
  return post(
    `cms/v1/keephouse/cancel-keep-house`,
    queryString
  );
};

requestApi.interceptors.request.use(async (config) => {

  // if exist token => use Bearer token
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiTGVhc2luZ0FnZW50RGlyZWN0b3IiLCJSb2xlSWRzIjoiMWEzNTNmOGMtZWE3Ny00MmM1LWE2ZGItYWVjNzZlMTVmZjRjIiwiQWdlbnRJZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMjQwOCIsIkFnZW50TmFtZSI6IsSQ4bqldCBYYW5oIFBsdXMiLCJBZ2VudENvZGUiOiLEkOG6pFQgWEFOSCBQTFVTIiwiUHJvamVjdHMiOiJkODg5MmExMS0zZjdlLTRlYjMtODQzYS1jZmU3MDVlZmU2M2EiLCJCZWxvbmdEZXBhcnRtZW50SWRzIjoiNGU2MjE0MGEtMmMyNS00ZWE4LTgzMzEtMmJmNzNkYjVkYTdiIiwibmFtZWlkIjoiOTZkMjRkMDQtYjE5OC00MTcyLTgzNDEtYWQzMTczNTljNjZlIiwiZW1haWwiOiJkYWlseWxlYXNpbmdAeW9wbWFpbC5jb20iLCJ1bmlxdWVfbmFtZSI6ImRhaWx5bGVhc2luZ0B5b3BtYWlsLmNvbSIsIkRpc3BsYXlOYW1lIjoixJBMIFRlc3QiLCJKb2JUaXRsZUlkIjoiIiwiVXNlclR5cGUiOiIyIiwiU2FsZXNUeXBlIjoiMCIsIm5iZiI6MTY4OTA1ODg0OCwiZXhwIjoxNjg5MDYwMDQ4LCJpYXQiOjE2ODkwNTg4NDgsImlzcyI6Imlzc3VlciIsImF1ZCI6ImF1ZGllbmNlIn0.1jm25rSSWYXqnN7RfWVxncCzyppFnQriVtqQsEsWy_I`;

  return config;
},
  (error) => {
    return Promise.reject(error);
  }
);

export default requestApi;

