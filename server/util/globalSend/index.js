const send = (returnCode, message, data) => {
  return {
    returnCode: returnCode,
    message: message,
    data: data !== undefined ? data : "None",
  };
};

module.exports = send;
