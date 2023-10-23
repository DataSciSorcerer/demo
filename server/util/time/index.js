// 获取当前时间的秒级时间戳
const timestampInSeconds = () => {
  const currentDate = new Date();
  return Math.floor(currentDate.getTime() / 1000);
};

//计算时间间隔
const getTimeDifference = (timestamp1, timestamp2, unit = "seconds") => {
  const timeDifference = Math.abs(timestamp2 - timestamp1); // 使用Math.abs确保时间间隔始终为正数

  switch (unit) {
    case "minutes":
      return timeDifference / 60;
    case "hours":
      return timeDifference / 3600;
    case "days":
      return timeDifference / 86400;
    default:
      return timeDifference; // 默认返回秒
  }
};

module.exports = { timestampInSeconds, getTimeDifference };
