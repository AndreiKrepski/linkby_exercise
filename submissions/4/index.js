
main()

function getFibonaaci(n) {
    let fib = new Array(n);
    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib[n-1];
}

function main() {
    console.log(getFibonaaci(10));
    console.log(getFibonaaci(20));
}
