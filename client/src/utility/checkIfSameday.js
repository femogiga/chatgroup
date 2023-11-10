import moment from 'moment';

const checkIfNexTDay = (firstDate, secondDate) => {
  const firstDate = moment('2020/10/14'); // the date to be checked
  const secondDate = moment('2020/10/15'); // the date to be checked

  firstDate.startOf('day').diff(secondDate.startOf('day'), 'days'); // result = -1
//   secondDate.startOf('day').diff(firstDate.startOf('day'), 'days'); // result = 1
};
