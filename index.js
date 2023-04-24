// Код для первого задания напиши в этой функции

let treeToString = "";

function crawlTree(array) {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      crawlTree(array[i]);
    }
  } else if (typeof array === "string") {
    treeToString += array;
  }
  return treeToString;
}

// Код для второго задания напиши в этой функции
function twoSum() {}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
