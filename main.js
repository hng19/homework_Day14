// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

let sortStudents = (arr) => arr.sort().reverse()
console.log(sortStudents(["Nam", "Hoa", "Tuấn"]))
// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
console.log(shuffle([1, 2, 3, 4, 5]))
// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
let symmetricDifference = (arr_01, arr_02) => {
    let res = []
    for (let i = 0; i < arr_01.length; i++) {
        if (arr_02.indexOf(arr_01[i]) != -1) {
            continue
        }
        res.push(arr_01[i])
    }
    for (let i = 0; i < arr_02.length; i++) {
        if (arr_01.indexOf(arr_02[i]) != -1) {
            continue
        }
        res.push(arr_02[i])
    }
    return res
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))
// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
function union(arr, arr_01) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    for (let i = 0; i < arr_01.length; i++) {
        if (newArr.indexOf(arr_01[i]) === -1) {
          newArr.push(arr_01[i])
        }
      }
    return newArr
  }
  console.log(union([1, 2, 3, 1], [4, 3, 2, 4]))
  console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))