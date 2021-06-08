// Your code here
const mapToNegativize = function(array) {
    return array.map(element => element * -1)
}

const mapToNoChange = function(array) {
    return array.map(element => element)
}

const mapToDouble = function(array) {
    return array.map(element => element * 2)
}

const mapToSquare = function(array) {
    return array.map(element => element ** 2)
}

const reduceToTotal = function(array, num=0) {
    return array.reduce(function(total, element){
        return element + total 
    }, num) 
}

const reduceToAllTrue = function(array) {
    let value = false 
    array.forEach(element => {
      if(Boolean(element) === false) {
          value = false 
      } else {
          value = true 
      }
    })
    return value 
}

// array.forEach(element => {
//     if(Boolean(element) === false) {
//         return false 
//     }
// })

const reduceToAnyTrue = function(array) {
    return array.reduce(function(total, element){
        if(element + total){
            return true 
        } else {
            return false 
        }
    }, 0)
}