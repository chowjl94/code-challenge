function sumUsingForLoop(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function sumUsingRecursion(n) {
	if (n === 1) {
		return 1;
	} else {
		return n + sumUsingRecursion(n - 1);
	}
}

function sumUsingFormula(n) {
	return (n * (n + 1)) / 2;
}

console.log(sumUsingForLoop(5)); // 15
console.log(sumUsingRecursion(5)); // 15
console.log(sumUsingFormula(5)); //15

console.log(sumUsingForLoop(6)); // 21
console.log(sumUsingRecursion(6)); // 21
console.log(sumUsingFormula(6)); // 21
