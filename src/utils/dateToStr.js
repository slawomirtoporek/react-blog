const dateToStr = date => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const year = date.getFullYear();
  return day + '/' + month + '/' + year;
};

export default dateToStr;