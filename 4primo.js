function verificar(num) {
    if (num <= 1) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

for (let i =2; i <= 200; i++) {
    if (verificar(i)) {
        console.log(i);
    }
}