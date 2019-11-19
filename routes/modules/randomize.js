module.exports = function randomize(str) {
  const strArr = str.split("");

  const randArr = [];
  for (let i = 0; i < 12; i++) {
    randArr.push(strArr[Math.floor(Math.random() * str.length)]);
  }
  return randArr
    .join("")
    .trim()
    .replace(/\s/gi, "_");
};
