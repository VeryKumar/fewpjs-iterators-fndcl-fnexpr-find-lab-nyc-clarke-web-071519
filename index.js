// const testVar = {}

// function testFunc() {
//   return "hi"
// }

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
  //...
];

const superbowlWin = arrayOfObjects => {
  //use find to return the first element which returns true
  //use the object to find the the year (via find), and then return it
  //spec case - if nothing is found,return undefined
  let result = arrayOfObjects.find(
    arrayOfObjects => arrayOfObjects.result === "W"
  );
  return !!result ? result.year : undefined;
};
