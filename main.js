/*
 Bài 1: Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
*/

const getArrayString = (string, lenght) => {
  const arr = []
  for (let i = 0; i < lengthArr; i++) {
    arr.push(string)
  }
  return arr
}

/*
 Bài 2: Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()
*/

const reverseArray = (arr = []) => {
  const reversedArr = []
  arr.forEach(item => {
    reversedArr.unshift(item)
  })
  return reversedArr
}

/*
 Bài 3: Xóa đi các giá trị được xem là sai
*/

const eraseFalsy = arr => arr.filter(element => element)

/*
 Bài 4: Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
*/

const createObject = (arrayDatas = []) => {
  const obj = {}
  dataArr.forEach(arr => {
    obj[arr[0]] = arr[1]
  })
  return obj
}

/*
 Bài 5: Sắp xếp mảng tăng dần
*/

const sortArray = numbers => numbers.sort()

/*
 Bài 6: Kiểm tra input đầu vào có phải là object hay không?
 */

const checkTypes = obj => {
  if (Array.isArray(obj) || typeof obj !== 'object') {
    return false
  } else {
    return true
  }
}

/*
 Bài 7: Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào
*/

const getObjectKeys = (obj, keys) => {
  keys.forEach(key => {
    for (let keyItem in obj) {
      if (key === keyItem) {
        delete (obj[key])
      }
    }
  })
  return obj
}

/*
Bài 8: Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử
  Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa
*/
const deleteArray = (array = []) => {
  if (array.lenght < 5) {
    return console.log("Array is more 5 elements")
  }

  const eleDelete = array.splice(1, 2)
  return array
}

/*
 Bài 9:
 */
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const getStudentResult = students => {
  const studentResults = []

  students.map(student => {
    const { name, score } = student
    const lengName = name.length

    if (score > 5 && name.lastIndexOf('Duy', lengName - 4) === -1) {
      studentResults.push('Pass')
    } else {
      studentResults.push('Fail')
    }
  })
  return studentResults
}

/*
 Bài 10:
 */
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const getStudentPass = students => {
  const studentPass = []

  students.forEach(student => {
    const score = student.score

    const numberBeforeDigit = Number.parseInt(score)
    const numberAfterDigit = Math.round((score - numberBeforeDigit) * 10)
    const lastNumber = (numberBeforeDigit + numberAfterDigit) % 10

    if (lastNumber > 5) {
      studentPass.push(student)
    }
  })
  return studentPass
}
