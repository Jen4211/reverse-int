module.exports = function reverse (n) {
   let x = n;
  let xReverse = String(Math.abs(x)).split('').reverse().join('');
  return xReverse;
}
