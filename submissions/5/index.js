
/*
Can you explain what is wrong with the code above? What can be done to rectify the problem?

 for (var i = 0; i < 5; i++) {
	    setTimeout(function() { console.log(i); }, i * 1000 );
    }

Problem: this loop will exit with i = 5. Timeout function will execute after for loop finished i.e. when i = 5.
Due to Javascript closure console.log will have access to i when i = 5. Therefore it will print 5 5 times.

Fixed version of code is in function main()
Let variable is limited to the scope of a block statement, var variable is defined for the entire function
or globally (if outside function)
 */
main()

function main() {
    for (var i = 0; i < 5; i++) {
        let num = i;
	    setTimeout(function() { console.log(num); }, i * 1000 );
    }

    // or

    for (let i = 0; i < 5; i++) {
        setTimeout(function() { console.log(i); }, i * 1000 );
    }
}
