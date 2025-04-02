const getInfoLog = (method, url) => {
  return `[INFO] ${new Date().toISOString()} Method: ${method}, URL: ${url}`;
};

const getErrorLog = (url) => {
  return `[ERROR] ${new Date().toISOString()} Requested URL not found: ${url}`;
};

const getProcessLog = (message) => {
  return `[PROCESS] ${new Date().toISOString()} ${message}`;
};

module.exports = { getInfoLog, getErrorLog, getProcessLog };
