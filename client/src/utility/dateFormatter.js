





import moment from 'moment';

export const dateFormattter = (dateToFormat) => {
    const format = 'YYYY-MM-DD';
    const date = moment(dateToFormat).format(format);
    return date
}













// export const dateFormattter = (dateToFormat) => {
//     const date = new Date(dateToFormat)
//     const day = date.getDay()
//     const month = date.getMonth()
//     const year = date.getFullYear()
//     let newDay =day;
//     let newMonth = month
//     if (day < 10) {
//         newDay = `0${day}`
//     }
//     if (month < 10) {
//       newMonth = `0${month}`;
//     }
//    const  newDate = newDay + '-' + newMonth + '-' + year
//     return newDate
// }


console.log(dateFormattter('2021-10-29T20:08:26.894Z'));
console.log(dateFormattter('2023-07-30T19:23:18.745Z'));
console.log(dateFormattter('1999-11-04T17:46:58.187Z'));
console.log(dateFormattter('2022-11-04T17:46:58.187Z'));
