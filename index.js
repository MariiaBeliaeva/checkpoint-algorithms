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
function twoSum() {}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;
