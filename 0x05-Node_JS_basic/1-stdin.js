// 1-stdin.js

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for data (user input) on stdin
process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Get the input and remove any extra spaces/newlines
    console.log(`Your name is: ${name}`);
    
    // Close the stdin stream
    process.stdin.end();
});

// Listen for the 'end' event to display the closing message
process.stdin.on('end', () => {
    console.log('This important software is now closing');
});
