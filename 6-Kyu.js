// 6 kyu: Simple Fun #52: Pairs of shoes
let shoes = [
    [0, 21],
    [1, 23],
    [1, 21],
    [0, 23]
];

function pairOfShoes(shoes) {
    let shoeHasMatch = false;
    let shoeThatMatches;
    let newArray;
    for (let i = 1; i < shoes.length; i++) {
        if (shoes[i][1] === shoes [0][1]) {
            if (shoes[i][0] !== shoes[0][0]) {
                shoeHasMatch = true;
                shoes.splice(i, 1);
                shoes.splice(0, 1);
            }
        }
    }
    return shoes.length < 2 || !shoeHasMatch ? shoeHasMatch : pairOfShoes(shoes);
}
