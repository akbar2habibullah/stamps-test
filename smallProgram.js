function isPrime(n) {
	if (n <= 1) {
		return false
	}
	if (n <= 3) {
		return true
	}
	if (n % 2 == 0 || n % 3 == 0) {
		return false
	}
	let i = 5
	while (i * i <= n) {
		if (n % i == 0 || n % (i + 2) == 0) {
			return false
		}
		i += 6
	}
	return true
}

let numbers = Array.from({ length: 100 }, (_, i) => i + 1)
let reversedNumbers = numbers.reverse()

for (let num of reversedNumbers) {
	if (isPrime(num)) {
		continue
	} else if (num % 3 == 0 && num % 5 == 0) {
		process.stdout.write("FooBar, ")
	} else if (num % 3 == 0) {
		process.stdout.write("Foo, ")
	} else if (num % 5 == 0) {
		process.stdout.write("Bar, ")
	} else {
		process.stdout.write(num + ", ")
	}
}
