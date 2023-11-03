export const abbreviate = (word) => {
  const arr = word.split(' ');
  console.log('=====>', arr);
  let firstLetter = arr[0][0];
  let secondLetter = '';
  if (arr.length <= 1) {
    const string = arr[0];
    firstLetter = string[0];
    return firstLetter.toUpperCase();
  } else {
    const string = arr[1];
    secondLetter = string[0];
    return (firstLetter + secondLetter).toUpperCase();
  }
};

//console.log(abbreviate('frontend development'));
//console.log(abbreviate('backend development'));
//console.log(abbreviate('random'));
//console.log(abbreviate('CaT ANd doG'));
//console.log(abbreviate('back-end'));
