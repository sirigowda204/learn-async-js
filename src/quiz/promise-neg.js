function logRowsWithNegativeNumbers(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject('BAD INPUT: Expected array as input');
            return;
        }

        arr.forEach(row => {
            if (row.some(num => num < 0)) {
                console.log('Row with negative number:', row);
            }
        });

        resolve();
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegativeNumbers(array2D)
    .then(() => {
        console.log('Logging complete');
    })
    .catch(error => {
        console.error('Error:', error);
    });
