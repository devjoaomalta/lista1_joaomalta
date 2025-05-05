function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let count = 0, num = 2;

while (count < 1001) {
    if (isPrime(num)) count++;
    num++;
}

console.log("O 1001º número primo é:", num - 1);