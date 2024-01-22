function createPhoneNumber(numbers){
    numbers.splice(0, 0, '(')
    numbers.splice(4, 0, ')')
    numbers.splice(8, 0, '-')
    numbers.splice(5, 0, '_')
    let a = numbers.toString()
    let b = a.replace(/\,/g, '')
    let c = b.replace(/_/g, ' ')
      return c
    }


console.log(createPhoneNumber([4, 4, 3, 3, 7, 8, 1, 4, 9, 0]))
console.log(createPhoneNumber([3, 4, 2, 3, 7, 8, 1, 6, 9, 1]))
console.log(createPhoneNumber([5, 4, 2, 3, 0, 8, 1, 3, 2, 6]))
console.log(createPhoneNumber([9, 4, 3, 3, 7, 6, 1, 4, 8, 0]))