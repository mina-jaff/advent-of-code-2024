const distanceBetweenLists = (listOne, listTwo) => {
    if (listOne.length === 0 || listTwo.length === 0) return 0;
    const sortedListOne = listOne.sort((a, b) => a - b);
    const sortedListTwo = listTwo.sort((a, b) => a - b);
    const lengthToLoop = sortedListOne.length > sortedListTwo.length ? sortedListOne.length : sortedListTwo.length;
    let distance = 0; 
    let i = 0;

    while (i < lengthToLoop) {
        distance += Math.abs(sortedListOne[i] - sortedListTwo[i]);
        i++;
    }

    return distance;
}

console.log(distanceBetweenLists([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3]));
