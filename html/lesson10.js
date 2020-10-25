/*
 Bai 1: In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả
*/

const printTableMultiple = num => {

    //Doi voi truong hop num là undefined hoăc null
    if (num != 0 && !num) {
        console.log('Xin hay nhập 1 giá trị khác null và undefined')
        return
    }

    for (let i = 0; i < 10; i++) {
        console.log(`${i} x ${num} = ${num * i}`)
    }
}

/*
 Bai 2: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n
*/

const printEvenNumbers = num => {

    //Doi voi truong hop num là undifine hoăc null hoặc <0 hoặc >30
    if (!num || num < 0 || num > 30) {
        console.log('Xin hay nhập 1 giá trị lớn hơn 0 và nhỏ hơn 30')
        return
    }

    for (let i = 2; i <= num; i += 2)) {
        console.log(`${i}`)
    }
}

/*
 Bai 3: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n
*/

const printSumNumber = num => {

    let sum = 0
    if (!num || num < 0 || num > 30) {
        console.log('Xin hay nhập 1 giá trị lớn hơn 0 và nhỏ hơn 30')
        return
    }

    for (let i = 0; i <= num; i++) {
        sum += i
    }

    return sum

}

/*
 Bai 4: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In ra n! (giai thừa của n)
*/

const printPeriod = num => {

    let period = 0
    if (!num || num < 0 || num > 30) {
        console.log('Xin hay nhập 1 giá trị lớn hơn 0 và nhỏ hơn 30')
        return
    }

    for (let i = 1; i <= num; i++) {
        period *= i
    }

    return period

}

/*
 Bai 5: Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
*/

const countEvenNumbers = numbers => {

    let evenNums = 0

    numbers.forEach(number => {
        if (number % 2 === 0) {
            evenNums++
        }
    })

    return evenNums

}

/*
 Bai 6: Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên. Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
*/

const removeDuplicates = array => {

    const newArray = []

    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            newArray.push(array[i])
        }
    }

    return newArray
}

/*
 Bài 7: Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:
*/

const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]

const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]

const createStudentObject = () => {

    let students = []

    studentNames.forEach(studentName => {
        let currScore = studentScores.find(studentScore => studentScore.id === studentName.id)

        students.push({
            id: studentName.id,
            name: studentName.name,
            score: currScore.score
        })
    })

    return students
}

/*
Bài 8 Cho array dưới đây là danh sách các students
Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất
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

const findScoreMaxMin = () => {

    let theBad = students[0]
    let theBest = students[0]

    let min = students[0].score
    let max = students[0].score

    students.forEach(student => {

        if (student.score > max) {
            theBest = student
            max = student.score
        }

        if (student.score < min) {
            theBad = student
            min = student.score
        }

    });

    return {
        theBad,
        theBest
    }

}
