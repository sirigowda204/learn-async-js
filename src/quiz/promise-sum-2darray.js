function sum2DArrayWithConcurrency(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject('BAD INPUT: Expected array as input');
            return;
        }

        let sum = 0;

        arr.forEach(row => {
            const rowSum = row.reduce((acc, val) => acc + val, 0);
            sum += rowSum;
        });

        resolve(sum);
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArrayWithConcurrency(array2D)
    .then(result => {
        console.log('Sum result:', result);
    })
    .catch(error => {
        console.error('Sum error:', error);
    });
