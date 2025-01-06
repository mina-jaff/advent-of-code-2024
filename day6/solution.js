const patrolProtocol = (map, startingPosition, direction) => {
    // e.g. startingPosition [6, 4] and direction "up"

    let [currentRow, currentColumn] = startingPosition;
    let visitedPositions = new Set();
    let nextRow = currentRow;
    let nextColumn = currentColumn
    let nextChar = map[nextRow][nextColumn];
    let currentDirection = direction;
    let patrolOver = false;

    const startKey = `${currentRow},${currentColumn}`;
    visitedPositions.add(startKey);

    while (!patrolOver) {
        let nextRow = currentRow;
        let nextColumn = currentColumn;
        
        // determine next position to check in the map
        if (currentDirection === "up" && currentRow > 0) {
            nextRow -= 1;
        } else if (currentDirection === "right" && currentColumn < map[currentRow].length - 1) {
            nextColumn += 1;
        } else if (currentDirection === "down" && currentRow < map.length - 1) {
            nextRow += 1;
        } else if (currentDirection === "left" && currentColumn > 0) {
            nextColumn -= 1;
        }

        nextChar = map[nextRow][nextColumn];

        if (nextChar === "#") {
            const directions = ["up", "right", "down", "left"];
            let currentIndex = directions.indexOf(currentDirection);
            currentDirection = directions[(currentIndex + 1) % directions.length];
            continue;
        }

        currentRow = nextRow;
        currentColumn = nextColumn;

        const positionKey = `${currentRow},${currentColumn}`;
        if (!visitedPositions.has(positionKey)) {
            visitedPositions.add(positionKey);
        }

        // if at an edge, set patrolOver
        if (nextRow === 0 || nextRow === map.length - 1 || 
            nextColumn === 0 || nextColumn === map[nextRow].length - 1) { 
            patrolOver = true;
            break;
        }
    }

    return visitedPositions.size;
}


const map = [
    "....#.....",
    ".........#",
    "..........",
    "..#.......",
    ".......#..",
    "..........",
    ".#........",
    "........#.",
    "#.........",
    "......#..."
];
const startingPosition = [6, 4];
const direction = "up";

console.log(patrolProtocol(map, startingPosition, direction));
