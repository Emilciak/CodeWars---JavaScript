function highAndLow(numbers){
  let a = numbers.split(' ')
  return `${Math.max(...a)} ${Math.min(...a)}`;
}

highAndLow("19 3 -5 42 -2 0 0 -12 4 7 7 -4"); //'41 -12'
