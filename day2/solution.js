const findSafeReports = (unusualData) => {
    // assuming unusualData is an array of arrays of integers, as the prompt suggests
    let safeReports = 0;
    const maxDiff = 3;

    unusualData.forEach((currentReport) => {
        if (currentReport.length < 2) {
            // Skip invalid reports with less than 2 elements
            return;
        }

        // Determine the trend (incrementing or decrementing)
        const isIncrementing = currentReport[0] < currentReport[1];
        let isSafe = true;

        for (let i = 0; i < currentReport.length - 1; i++) {
            const current = currentReport[i];
            const next = currentReport[i + 1];

            // Check the incrementing/decrementing condition
            if (isIncrementing) {
                if (!(current < next && Math.abs(current - next) <= maxDiff)) {
                    isSafe = false;
                    break;
                }
            } else {
                if (!(current > next && Math.abs(current - next) <= maxDiff)) {
                    isSafe = false;
                    break;
                }
            }
        }

        if (isSafe) {
            safeReports++;
        }
    });

    return safeReports;
};


console.log(findSafeReports([[7, 6, 4, 2, 1], [1, 2, 7, 8, 9], [9, 7, 6, 2, 1], [1, 3, 2, 4, 5], [8, 6, 4, 4, 1], [1, 3, 6, 7, 9]]));
