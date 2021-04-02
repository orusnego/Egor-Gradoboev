function check (arr, num) {
	sum = 0;
		for (let i = 0; i < arr.length; i++) {	
			for (let j = i +1; j < arr.length, j++) {
				if (arr[i] + arr[j] === num) {
					return true;
				} else {
					return false;
				}
			}
		}

console.log(check([10, 15, 3, 7], 17));
console.log(check([10, 15, 3, 7], 20));
