// Код для первого задания напиши в этой функции

function crawlTree(array) {
  let treeToString = "";
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      treeToString += array[i];
    } else {
      treeToString += crawlTree(array[i]);
    }
  }
  return treeToString;
}

// Код для второго задания напиши в этой функции

function twoSum(arr, target) {
  let indexes = [];
  arr.map((a, i) => {
    arr.map((b, j) => {
      if (i !== j && a + b === target) {
        indexes.push(i, j);
      }
    });
  });
  return indexes;
}

const arr = [3, 2, 4];
const target = 6;
console.log(twoSum(arr, target));

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
