// Given an array of integers as strings and numbers, return the sum of the array value as if all were numbers.

function summMix(mixedArray) {
	let sum = 0
	for (let i = 0; i < mixedArray.length; i++){
		sum = sum + Number(mixedArray[i])
	}

	return sum
} 

console.log("Ejemplo 1:")
const array1 = [9, 3, '7', '3']
console.log(`Input: [${array1}]`)
console.log(`Output: [${summMix(array1)}]`)
console.log("Expected output: 22")
