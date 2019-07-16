//

// reversi.js
import { getFlip, Player } from './reversi.js';

function assertEqualSet(a1, a2) {
    function printArrays() {
        console.log(`a1:${a1}`);
        console.log(`a2:${a2}`);
    }

    if (a1.length !== a2.length) {
        printArrays();
        return;
    }

    a1.sort();
    a2.sort();
    for (let i = 0; i < a1.length; ++i) {
        if (a1[i] !== a2[i]) {
            printArrays();
            return;
        }
    }

    console.log("truly equal!");
}

/* assertEqualSet(
    getFlip(
        [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        0, 0, Player.black
    ),
    [

    ]
); */

assertEqualSet(
    getFlip(
        [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 2, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        0, 0, Player.black
    ),
    [
        9
    ]
);

assertEqualSet(
    getFlip(
        [
            0, 2, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        0, 0, Player.black
    ),
    [
        1
    ]
);

assertEqualSet(
    getFlip(
        [
            0, 0, 0, 0, 0, 0, 0, 0,
            2, 0, 0, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        0, 0, Player.black
    ),
    [
        8
    ]
);

assertEqualSet(
    getFlip(
        [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 2, 0,
        ],
        7, 7, Player.black
    ),
    [
        62
    ]
);

assertEqualSet(
    getFlip(
        [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0, 0, 2,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        7, 7, Player.black
    ),
    [
        55
    ]
);

assertEqualSet(
    getFlip(
        [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1, 0, 0,
            0, 0, 0, 0, 0, 0, 2, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        7, 7, Player.black
    ),
    [
        54
    ]
);

assertEqualSet(
    getFlip(
        [
            1, 0, 0, 0, 1, 0, 0, 0,
            0, 2, 0, 0, 2, 0, 0, 1,
            0, 0, 2, 0, 2, 0, 2, 0,
            0, 0, 0, 2, 2, 2, 0, 0,
            1, 2, 2, 2, 0, 2, 2, 1,
            0, 0, 0, 2, 2, 2, 0, 0,
            0, 0, 2, 0, 2, 0, 2, 0,
            0, 1, 0, 0, 1, 0, 0, 1,
        ],
        4, 4, Player.black
    ),
    // 2のところは全部ひっくり返るので
    (function () {
        let arr = [
            1, 0, 0, 0, 1, 0, 0, 0,
            0, 2, 0, 0, 2, 0, 0, 1,
            0, 0, 2, 0, 2, 0, 2, 0,
            0, 0, 0, 2, 2, 2, 0, 0,
            1, 2, 2, 2, 0, 2, 2, 1,
            0, 0, 0, 2, 2, 2, 0, 0,
            0, 0, 2, 0, 2, 0, 2, 0,
            0, 1, 0, 0, 1, 0, 0, 1,
        ];

        let ret = [];
        for (let i = 0; i < 64; ++i) {
            if (arr[i] == 2) ret.push(i);
        }

        return ret;
    })()
);

// 置けないパターン

assertEqualSet(
    getFlip(
        [
            1, 1, 1, 0, 0, 0, 0, 0,
            1, 0, 1, 0, 0, 0, 0, 0,
            1, 1, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        1, 1, Player.black
    ),
    []
);

assertEqualSet(
    getFlip(
        [
            0, 2, 2, 2, 2, 2, 2, 2,
            0, 2, 0, 0, 0, 0, 0, 0,
            2, 0, 0, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        0, 0, Player.black
    ),
    []
);

assertEqualSet(
    getFlip(
        [
            1, 2, 2, 2, 1, 0, 0, 0,
            2, 2, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
        ],
        0, 0, Player.black
    ),
    []
);