
main()

function add(x, y) {
    if (y || y === 0) return x + y;
    else {
        return function (y) {
            return x + y;
        };
    }
}

function main() {
    console.log(add(4,6));   // Outputs 10
    console.log(add(4)(6));  // Outputs 10
}
