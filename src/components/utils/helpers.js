const dateFormater = (cmt) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const createdAt = new Date(cmt.createdAt);
  return `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${createdAt.getHours()}:${createdAt.getMinutes()} \u00A0\u00A0 ${createdAt.getDate()} ${
    months[createdAt.getMonth() + 1]
  } ${createdAt.getFullYear()}`;
};

export default {
  dateFormater
};
