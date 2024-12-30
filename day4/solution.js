const findXMAS = (grid) => {
    // Assuming grid is an array of same length strings
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // Check for left to right spelling
            if (grid[i][j] === 'X') {
                // Horizontal check (to the right)
                if (j + 3 < grid[i].length &&
                    grid[i][j + 1] === 'M' &&
                    grid[i][j + 2] === 'A' &&
                    grid[i][j + 3] === 'S') {
                    count++;
                }

                // Vertical check (downward)
                if (i + 3 < grid.length &&
                    grid[i + 1][j] === 'M' &&
                    grid[i + 2][j] === 'A' &&
                    grid[i + 3][j] === 'S') {
                    count++;
                }

                // Diagonal check (bottom-right)
                if (i + 3 < grid.length &&
                    j + 3 < grid[i].length &&
                    grid[i + 1][j + 1] === 'M' &&
                    grid[i + 2][j + 2] === 'A' &&
                    grid[i + 3][j + 3] === 'S') {
                    count++;
                }

                // Diagonal check (bottom-left) 
                if (i + 3 < grid.length &&
                    j - 3 >= 0 &&
                    grid[i + 1][j - 1] === 'M' &&
                    grid[i + 2][j - 2] === 'A' &&
                    grid[i + 3][j - 3] === 'S') {
                    count++;
                }
            }
            // Check for backwards spelling
            if (grid[i][j] === 'S') {
                // Horizontal check (to the right)
                if (j + 3 < grid[i].length &&
                    grid[i][j + 1] === 'A' &&
                    grid[i][j + 2] === 'M' &&
                    grid[i][j + 3] === 'X') {
                    count++;
                }

                // Vertical check (downward)
                if (i + 3 < grid.length &&
                    grid[i + 1][j] === 'A' &&
                    grid[i + 2][j] === 'M' &&
                    grid[i + 3][j] === 'X') {
                    count++;
                }

                // Diagonal check (bottom-right)
                if (i + 3 < grid.length &&
                    j + 3 < grid[i].length &&
                    grid[i + 1][j + 1] === 'A' &&
                    grid[i + 2][j + 2] === 'M' &&
                    grid[i + 3][j + 3] === 'X') {
                    count++;
                }

                // Diagonal check (bottom-left) 
                if (i + 3 < grid.length &&
                    j - 3 >= 0 &&
                    grid[i + 1][j - 1] === 'A' &&
                    grid[i + 2][j - 2] === 'M' &&
                    grid[i + 3][j - 3] === 'X') {
                    count++;
                }
            }
        }
    }

    return count;
}

console.log(findXMAS(['MMMSXXMASM', 'MSAMXMSMSA', 'AMXSXMAAMM', 'MSAMASMSMX', 'XMASAMXAMM', 'XXAMMXXAMA', 'SMSMSASXSS', 'SAXAMASAAA', 'MAMMMXMMMM', 'MXMXAXMASX']));
