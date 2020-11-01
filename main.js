/*
 Bai 1, So sanh 2 array
*/

const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 5]
const arr4 = [1, 2, 3, 4, 5]

const compareArray = (array1, array2) => JSON.stringify(array1) === JSON.stringify(array2)

/*
 Bai 2, Sắp xếp lại mảng
*/

// const data = [1, 2, [3, 4, [5]]]

const flatten = (array) => {
  const newArray = JSON.parse(JSON.stringify(array))

  return newArray.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

/*
 Bai 3
*/

const data = [1, 2, 3, 4, 5, 6, 7];

const chunkArray = (arr, size) => {
  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size))
  }

  return chunkedArray
}

/*
 Bai 4
*/

function intersection() {
  const argsContainArray = (arguments) => {
    for (var i = 0; i < arguments.length; i++) {
      if (!Array.isArray(arguments[i])) {
        return false
      }
    }

    return true
  }

  const getDuplicateElements = (arr1, arr2) => {
    return arr1.filter(function (val) {
      return arr2.indexOf(val) != -1;
    });
  }

  if (!arguments || arguments.length < 2 || !argsContainArray(arguments)) return

  let duplicateItems = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    duplicateItems = getDuplicateElements(duplicateItems, arguments[i])
  }

  return duplicateItems
}

/*
 Bai 5
*/

const checkExpiredDate = (orders) => {
  const expirationDate = '30 OCt 2020 12:20:32';
  return Date.parse(orders) <= Date.parse(expirationDate)
}

/*
  Bai 6
*/

const validateEmail = email => {
  const regexEmail = /^[a-z0-9]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z]*[a-z])?\.)+[a-z](?:[a-z]*[a-z])?$/g
  return regexEmail.test(email)
}

const validateUserName = userName => {
  const regexUserName = /^((?!__))([a-z1-9_]){2,10}$/g
  return regexUserName.test(userName)
}
