window.parent._wrap_staticMeasuredFunctions['canvastext.js'] = 16;
window.parent._wrap_staticMeasuredCalls['canvastext.js'] =52;
var CanvasText = {letters: {'\n': {width: -1, points: []}, ' ': {width: 10, points: []}, '!': {width: 10, points: [[5, 21], [5, 7], null, [5, 2], [4, 1], [5, 0], [6, 1], [5, 2]]}, '"': {width: 16, points: [[4, 21], [4, 14], null, [12, 21], [12, 14]]}, '#': {width: 21, points: [[11, 25], [4, -7], null, [17, 25], [10, -7], null, [4, 12], [18, 12], null, [3, 6], [17, 6]]}, '$': {width: 20, points: [[8, 25], [8, -4], null, [12, 25], [12, -4], null, [17, 18], [15, 20], [12, 21], [8, 21], [5, 20], [3, 18], [3, 16], [4, 14], [5, 13], [7, 12], [13, 10], [15, 9], [16, 8], [17, 6], [17, 3], [15, 1], [12, 0], [8, 0], [5, 1], [3, 3]]}, '%': {width: 24, points: [[21, 21], [3, 0], null, [8, 21], [10, 19], [10, 17], [9, 15], [7, 14], [5, 14], [3, 16], [3, 18], [4, 20], [6, 21], [8, 21], null, [17, 7], [15, 6], [14, 4], [14, 2], [16, 0], [18, 0], [20, 1], [21, 3], [21, 5], [19, 7], [17, 7]]}, '&': {width: 26, points: [[23, 12], [23, 13], [22, 14], [21, 14], [20, 13], [19, 11], [17, 6], [15, 3], [13, 1], [11, 0], [7, 0], [5, 1], [4, 2], [3, 4], [3, 6], [4, 8], [5, 9], [12, 13], [13, 14], [14, 16], [14, 18], [13, 20], [11, 21], [9, 20], [8, 18], [8, 16], [9, 13], [11, 10], [16, 3], [18, 1], [20, 0], [22, 0], [23, 1], [23, 2]]}, '\'': {width: 10, points: [[5, 19], [4, 20], [5, 21], [6, 20], [6, 18], [5, 16], [4, 15]]}, '(': {width: 14, points: [[11, 25], [9, 23], [7, 20], [5, 16], [4, 11], [4, 7], [5, 2], [7, -2], [9, -5], [11, -7]]}, ')': {width: 14, points: [[3, 25], [5, 23], [7, 20], [9, 16], [10, 11], [10, 7], [9, 2], [7, -2], [5, -5], [3, -7]]}, '*': {width: 16, points: [[8, 21], [8, 9], null, [3, 18], [13, 12], null, [13, 18], [3, 12]]}, '+': {width: 26, points: [[13, 18], [13, 0], null, [4, 9], [22, 9]]}, ',': {width: 10, points: [[6, 1], [5, 0], [4, 1], [5, 2], [6, 1], [6, -1], [5, -3], [4, -4]]}, '-': {width: 26, points: [[4, 9], [22, 9]]}, '.': {width: 10, points: [[5, 2], [4, 1], [5, 0], [6, 1], [5, 2]]}, '/': {width: 22, points: [[20, 25], [2, -7]]}, '0': {width: 20, points: [[9, 21], [6, 20], [4, 17], [3, 12], [3, 9], [4, 4], [6, 1], [9, 0], [11, 0], [14, 1], [16, 4], [17, 9], [17, 12], [16, 17], [14, 20], [11, 21], [9, 21]]}, '1': {width: 20, points: [[6, 17], [8, 18], [11, 21], [11, 0]]}, '2': {width: 20, points: [[4, 16], [4, 17], [5, 19], [6, 20], [8, 21], [12, 21], [14, 20], [15, 19], [16, 17], [16, 15], [15, 13], [13, 10], [3, 0], [17, 0]]}, '3': {width: 20, points: [[5, 21], [16, 21], [10, 13], [13, 13], [15, 12], [16, 11], [17, 8], [17, 6], [16, 3], [14, 1], [11, 0], [8, 0], [5, 1], [4, 2], [3, 4]]}, '4': {width: 20, points: [[13, 21], [3, 7], [18, 7], null, [13, 21], [13, 0]]}, '5': {width: 20, points: [[15, 21], [5, 21], [4, 12], [5, 13], [8, 14], [11, 14], [14, 13], [16, 11], [17, 8], [17, 6], [16, 3], [14, 1], [11, 0], [8, 0], [5, 1], [4, 2], [3, 4]]}, '6': {width: 20, points: [[16, 18], [15, 20], [12, 21], [10, 21], [7, 20], [5, 17], [4, 12], [4, 7], [5, 3], [7, 1], [10, 0], [11, 0], [14, 1], [16, 3], [17, 6], [17, 7], [16, 10], [14, 12], [11, 13], [10, 13], [7, 12], [5, 10], [4, 7]]}, '7': {width: 20, points: [[17, 21], [7, 0], null, [3, 21], [17, 21]]}, '8': {width: 20, points: [[8, 21], [5, 20], [4, 18], [4, 16], [5, 14], [7, 13], [11, 12], [14, 11], [16, 9], [17, 7], [17, 4], [16, 2], [15, 1], [12, 0], [8, 0], [5, 1], [4, 2], [3, 4], [3, 7], [4, 9], [6, 11], [9, 12], [13, 13], [15, 14], [16, 16], [16, 18], [15, 20], [12, 21], [8, 21]]}, '9': {width: 20, points: [[16, 14], [15, 11], [13, 9], [10, 8], [9, 8], [6, 9], [4, 11], [3, 14], [3, 15], [4, 18], [6, 20], [9, 21], [10, 21], [13, 20], [15, 18], [16, 14], [16, 9], [15, 4], [13, 1], [10, 0], [8, 0], [5, 1], [4, 3]]}, ':': {width: 10, points: [[5, 14], [4, 13], [5, 12], [6, 13], [5, 14], null, [5, 2], [4, 1], [5, 0], [6, 1], [5, 2]]}, ';': {width: 10, points: [[5, 14], [4, 13], [5, 12], [6, 13], [5, 14], null, [6, 1], [5, 0], [4, 1], [5, 2], [6, 1], [6, -1], [5, -3], [4, -4]]}, '<': {width: 24, points: [[20, 18], [4, 9], [20, 0]]}, '=': {width: 26, points: [[4, 12], [22, 12], null, [4, 6], [22, 6]]}, '>': {width: 24, points: [[4, 18], [20, 9], [4, 0]]}, '?': {width: 18, points: [[3, 16], [3, 17], [4, 19], [5, 20], [7, 21], [11, 21], [13, 20], [14, 19], [15, 17], [15, 15], [14, 13], [13, 12], [9, 10], [9, 7], null, [9, 2], [8, 1], [9, 0], [10, 1], [9, 2]]}, '@': {width: 27, points: [[18, 13], [17, 15], [15, 16], [12, 16], [10, 15], [9, 14], [8, 11], [8, 8], [9, 6], [11, 5], [14, 5], [16, 6], [17, 8], null, [12, 16], [10, 14], [9, 11], [9, 8], [10, 6], [11, 5], null, [18, 16], [17, 8], [17, 6], [19, 5], [21, 5], [23, 7], [24, 10], [24, 12], [23, 15], [22, 17], [20, 19], [18, 20], [15, 21], [12, 21], [9, 20], [7, 19], [5, 17], [4, 15], [3, 12], [3, 9], [4, 6], [5, 4], [7, 2], [9, 1], [12, 0], [15, 0], [18, 1], [20, 2], [21, 3], null, [19, 16], [18, 8], [18, 6], [19, 5]]}, 'A': {width: 18, points: [[9, 21], [1, 0], null, [9, 21], [17, 0], null, [4, 7], [14, 7]]}, 'B': {width: 21, points: [[4, 21], [4, 0], null, [4, 21], [13, 21], [16, 20], [17, 19], [18, 17], [18, 15], [17, 13], [16, 12], [13, 11], null, [4, 11], [13, 11], [16, 10], [17, 9], [18, 7], [18, 4], [17, 2], [16, 1], [13, 0], [4, 0]]}, 'C': {width: 21, points: [[18, 16], [17, 18], [15, 20], [13, 21], [9, 21], [7, 20], [5, 18], [4, 16], [3, 13], [3, 8], [4, 5], [5, 3], [7, 1], [9, 0], [13, 0], [15, 1], [17, 3], [18, 5]]}, 'D': {width: 21, points: [[4, 21], [4, 0], null, [4, 21], [11, 21], [14, 20], [16, 18], [17, 16], [18, 13], [18, 8], [17, 5], [16, 3], [14, 1], [11, 0], [4, 0]]}, 'E': {width: 19, points: [[4, 21], [4, 0], null, [4, 21], [17, 21], null, [4, 11], [12, 11], null, [4, 0], [17, 0]]}, 'F': {width: 18, points: [[4, 21], [4, 0], null, [4, 21], [17, 21], null, [4, 11], [12, 11]]}, 'G': {width: 21, points: [[18, 16], [17, 18], [15, 20], [13, 21], [9, 21], [7, 20], [5, 18], [4, 16], [3, 13], [3, 8], [4, 5], [5, 3], [7, 1], [9, 0], [13, 0], [15, 1], [17, 3], [18, 5], [18, 8], null, [13, 8], [18, 8]]}, 'H': {width: 22, points: [[4, 21], [4, 0], null, [18, 21], [18, 0], null, [4, 11], [18, 11]]}, 'I': {width: 8, points: [[4, 21], [4, 0]]}, 'J': {width: 16, points: [[12, 21], [12, 5], [11, 2], [10, 1], [8, 0], [6, 0], [4, 1], [3, 2], [2, 5], [2, 7]]}, 'K': {width: 21, points: [[4, 21], [4, 0], null, [18, 21], [4, 7], null, [9, 12], [18, 0]]}, 'L': {width: 17, points: [[4, 21], [4, 0], null, [4, 0], [16, 0]]}, 'M': {width: 24, points: [[4, 21], [4, 0], null, [4, 21], [12, 0], null, [20, 21], [12, 0], null, [20, 21], [20, 0]]}, 'N': {width: 22, points: [[4, 21], [4, 0], null, [4, 21], [18, 0], null, [18, 21], [18, 0]]}, 'O': {width: 22, points: [[9, 21], [7, 20], [5, 18], [4, 16], [3, 13], [3, 8], [4, 5], [5, 3], [7, 1], [9, 0], [13, 0], [15, 1], [17, 3], [18, 5], [19, 8], [19, 13], [18, 16], [17, 18], [15, 20], [13, 21], [9, 21]]}, 'P': {width: 21, points: [[4, 21], [4, 0], null, [4, 21], [13, 21], [16, 20], [17, 19], [18, 17], [18, 14], [17, 12], [16, 11], [13, 10], [4, 10]]}, 'Q': {width: 22, points: [[9, 21], [7, 20], [5, 18], [4, 16], [3, 13], [3, 8], [4, 5], [5, 3], [7, 1], [9, 0], [13, 0], [15, 1], [17, 3], [18, 5], [19, 8], [19, 13], [18, 16], [17, 18], [15, 20], [13, 21], [9, 21], null, [12, 4], [18, -2]]}, 'R': {width: 21, points: [[4, 21], [4, 0], null, [4, 21], [13, 21], [16, 20], [17, 19], [18, 17], [18, 15], [17, 13], [16, 12], [13, 11], [4, 11], null, [11, 11], [18, 0]]}, 'S': {width: 20, points: [[17, 18], [15, 20], [12, 21], [8, 21], [5, 20], [3, 18], [3, 16], [4, 14], [5, 13], [7, 12], [13, 10], [15, 9], [16, 8], [17, 6], [17, 3], [15, 1], [12, 0], [8, 0], [5, 1], [3, 3]]}, 'T': {width: 16, points: [[8, 21], [8, 0], null, [1, 21], [15, 21]]}, 'U': {width: 22, points: [[4, 21], [4, 6], [5, 3], [7, 1], [10, 0], [12, 0], [15, 1], [17, 3], [18, 6], [18, 21]]}, 'V': {width: 18, points: [[1, 21], [9, 0], null, [17, 21], [9, 0]]}, 'W': {width: 24, points: [[2, 21], [7, 0], null, [12, 21], [7, 0], null, [12, 21], [17, 0], null, [22, 21], [17, 0]]}, 'X': {width: 20, points: [[3, 21], [17, 0], null, [17, 21], [3, 0]]}, 'Y': {width: 18, points: [[1, 21], [9, 11], [9, 0], null, [17, 21], [9, 11]]}, 'Z': {width: 20, points: [[17, 21], [3, 0], null, [3, 21], [17, 21], null, [3, 0], [17, 0]]}, '[': {width: 14, points: [[4, 25], [4, -7], null, [5, 25], [5, -7], null, [4, 25], [11, 25], null, [4, -7], [11, -7]]}, '\\': {width: 14, points: [[0, 21], [14, -3]]}, ']': {width: 14, points: [[9, 25], [9, -7], null, [10, 25], [10, -7], null, [3, 25], [10, 25], null, [3, -7], [10, -7]]}, '^': {width: 14, points: [[3, 10], [8, 18], [13, 10]]}, '_': {width: 16, points: [[0, -2], [16, -2]]}, '`': {width: 10, points: [[6, 21], [5, 20], [4, 18], [4, 16], [5, 15], [6, 16], [5, 17]]}, 'a': {width: 19, points: [[15, 14], [15, 0], null, [15, 11], [13, 13], [11, 14], [8, 14], [6, 13], [4, 11], [3, 8], [3, 6], [4, 3], [6, 1], [8, 0], [11, 0], [13, 1], [15, 3]]}, 'b': {width: 19, points: [[4, 21], [4, 0], null, [4, 11], [6, 13], [8, 14], [11, 14], [13, 13], [15, 11], [16, 8], [16, 6], [15, 3], [13, 1], [11, 0], [8, 0], [6, 1], [4, 3]]}, 'c': {width: 18, points: [[15, 11], [13, 13], [11, 14], [8, 14], [6, 13], [4, 11], [3, 8], [3, 6], [4, 3], [6, 1], [8, 0], [11, 0], [13, 1], [15, 3]]}, 'd': {width: 19, points: [[15, 21], [15, 0], null, [15, 11], [13, 13], [11, 14], [8, 14], [6, 13], [4, 11], [3, 8], [3, 6], [4, 3], [6, 1], [8, 0], [11, 0], [13, 1], [15, 3]]}, 'e': {width: 18, points: [[3, 8], [15, 8], [15, 10], [14, 12], [13, 13], [11, 14], [8, 14], [6, 13], [4, 11], [3, 8], [3, 6], [4, 3], [6, 1], [8, 0], [11, 0], [13, 1], [15, 3]]}, 'f': {width: 12, points: [[10, 21], [8, 21], [6, 20], [5, 17], [5, 0], null, [2, 14], [9, 14]]}, 'g': {width: 19, points: [[15, 14], [15, -2], [14, -5], [13, -6], [11, -7], [8, -7], [6, -6], null, [15, 11], [13, 13], [11, 14], [8, 14], [6, 13], [4, 11], [3, 8], [3, 6], [4, 3], [6, 1], [8, 0], [11, 0], [13, 1], [15, 3]]}, 'h': {width: 19, points: [[4, 21], [4, 0], null, [4, 10], [7, 13], [9, 14], [12, 14], [14, 13], [15, 10], [15, 0]]}, 'i': {width: 8, points: [[3, 21], [4, 20], [5, 21], [4, 22], [3, 21], null, [4, 14], [4, 0]]}, 'j': {width: 10, points: [[5, 21], [6, 20], [7, 21], [6, 22], [5, 21], null, [6, 14], [6, -3], [5, -6], [3, -7], [1, -7]]}, 'k': {width: 17, points: [[4, 21], [4, 0], null, [14, 14], [4, 4], null, [8, 8], [15, 0]]}, 'l': {width: 8, points: [[4, 21], [4, 0]]}, 'm': {width: 30, points: [[4, 14], [4, 0], null, [4, 10], [7, 13], [9, 14], [12, 14], [14, 13], [15, 10], [15, 0], null, [15, 10], [18, 13], [20, 14], [23, 14], [25, 13], [26, 10], [26, 0]]}, 'n': {width: 19, points: [[4, 14], [4, 0], null, [4, 10], [7, 13], [9, 14], [12, 14], [14, 13], [15, 10], [15, 0]]}, 'o': {width: 19, points: [[8, 14], [6, 13], [4, 11], [3, 8], [3, 6], [4, 3], [6, 1], [8, 0], [11, 0], [13, 1], [15, 3], [16, 6], [16, 8], [15, 11], [13, 13], [11, 14], [8, 14]]}, 'p': {width: 19, points: [[4, 14], [4, -7], null, [4, 11], [6, 13], [8, 14], [11, 14], [13, 13], [15, 11], [16, 8], [16, 6], [15, 3], [13, 1], [11, 0], [8, 0], [6, 1], [4, 3]]}, 'q': {width: 19, points: [[15, 14], [15, -7], null, [15, 11], [13, 13], [11, 14], [8, 14], [6, 13], [4, 11], [3, 8], [3, 6], [4, 3], [6, 1], [8, 0], [11, 0], [13, 1], [15, 3]]}, 'r': {width: 13, points: [[4, 14], [4, 0], null, [4, 8], [5, 11], [7, 13], [9, 14], [12, 14]]}, 's': {width: 17, points: [[14, 11], [13, 13], [10, 14], [7, 14], [4, 13], [3, 11], [4, 9], [6, 8], [11, 7], [13, 6], [14, 4], [14, 3], [13, 1], [10, 0], [7, 0], [4, 1], [3, 3]]}, 't': {width: 12, points: [[5, 21], [5, 4], [6, 1], [8, 0], [10, 0], null, [2, 14], [9, 14]]}, 'u': {width: 19, points: [[4, 14], [4, 4], [5, 1], [7, 0], [10, 0], [12, 1], [15, 4], null, [15, 14], [15, 0]]}, 'v': {width: 16, points: [[2, 14], [8, 0], null, [14, 14], [8, 0]]}, 'w': {width: 22, points: [[3, 14], [7, 0], null, [11, 14], [7, 0], null, [11, 14], [15, 0], null, [19, 14], [15, 0]]}, 'x': {width: 17, points: [[3, 14], [14, 0], null, [14, 14], [3, 0]]}, 'y': {width: 16, points: [[2, 14], [8, 0], null, [14, 14], [8, 0], [6, -4], [4, -6], [2, -7], [1, -7]]}, 'z': {width: 17, points: [[14, 14], [3, 0], null, [3, 14], [14, 14], null, [3, 0], [14, 0]]}, '{': {width: 14, points: [[9, 25], [7, 24], [6, 23], [5, 21], [5, 19], [6, 17], [7, 16], [8, 14], [8, 12], [6, 10], null, [7, 24], [6, 22], [6, 20], [7, 18], [8, 17], [9, 15], [9, 13], [8, 11], [4, 9], [8, 7], [9, 5], [9, 3], [8, 1], [7, 0], [6, -2], [6, -4], [7, -6], null, [6, 8], [8, 6], [8, 4], [7, 2], [6, 1], [5, -1], [5, -3], [6, -5], [7, -6], [9, -7]]}, '|': {width: 8, points: [[4, 25], [4, -7]]}, '}': {width: 14, points: [[5, 25], [7, 24], [8, 23], [9, 21], [9, 19], [8, 17], [7, 16], [6, 14], [6, 12], [8, 10], null, [7, 24], [8, 22], [8, 20], [7, 18], [6, 17], [5, 15], [5, 13], [6, 11], [10, 9], [6, 7], [5, 5], [5, 3], [6, 1], [7, 0], [8, -2], [8, -4], [7, -6], null, [8, 8], [6, 6], [6, 4], [7, 2], [8, 1], [9, -1], [9, -3], [8, -5], [7, -6], [5, -7]]}, '~': {width: 24, points: [[3, 6], [3, 8], [4, 11], [6, 12], [8, 12], [10, 11], [14, 8], [16, 7], [18, 7], [20, 8], [21, 10], null, [3, 8], [4, 10], [6, 11], [8, 11], [10, 10], [14, 7], [16, 6], [18, 6], [20, 7], [21, 10], [21, 12]]}, '\xe9': {diacritic: '\xb4', letter: 'e'}, '\xe8': {diacritic: '`', letter: 'e'}, '\xea': {diacritic: '^', letter: 'e'}, '\xeb': {diacritic: '\xa8', letter: 'e'}, '\xe0': {diacritic: '`', letter: 'a'}, '\xe7': {diacritic: '\xb8', letter: 'c'}, '\xf1': {diacritic: '~', letter: 'n'}, '\xf4': {diacritic: '^', letter: 'o'}, '\xc9': {diacritic: '\xb4', letter: 'E'}, '\xc8': {diacritic: '`', letter: 'E'}, '\xca': {diacritic: '^', letter: 'E'}, '\xcb': {diacritic: '\xa8', letter: 'E'}, '\xc0': {diacritic: '`', letter: 'A'}, '\xc7': {diacritic: '\xb8', letter: 'C'}, '\xd1': {diacritic: '~', letter: 'N'}, '\xd4': {diacritic: '^', letter: 'O'}}, specialchars: {'pi': {width: 19, points: [[6, 14], [6, 0], null, [14, 14], [14, 0], null, [2, 13], [6, 16], [13, 13], [17, 16]]}}, diacritics: {'\xb8': {entity: 'cedil', points: [[6, -4], [4, -6], [2, -7], [1, -7]]}, '\xb4': {entity: 'acute', points: [[8, 19], [13, 22]]}, '`': {entity: 'grave', points: [[7, 22], [12, 19]]}, '^': {entity: 'circ', points: [[5.5, 19], [9.5, 23], [12.5, 19]]}, '\xa8': {entity: 'trema', points: [[5, 21], [6, 20], [7, 21], [6, 22], [5, 21], null, [12, 21], [13, 20], [14, 21], [13, 22], [12, 21]]}, '~': {entity: 'tilde', points: [[4, 18], [7, 22], [10, 18], [13, 22]]}}, style: {size: 8, font: null, color: '#000000', weight: 1, halign: 'l', valign: 'b', adjustAlign: false, angle: 0, tracking: 1, boundingBoxColor: '#ff0000', originPointColor: '#000000'}, debug: false, _bufferLexemes: {}, letter: function(ch) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5187, 126492,126560, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return CanvasText.letters[ch];
}, parseLexemes: function(str) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5190, 126584,127554, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (CanvasText._bufferLexemes[str]) 
    return CanvasText._bufferLexemes[str];
  var i, c, matches = (window.parent._wrap_setLastFunctionCall("canvastext.js",5193,126736,126770,str.match,false) || str.match(/&[A-Za-z]{2,5};|\s|./g));
  var result = [], chars = [];
  for (i = 0; i < matches.length; i++) {
    c = matches[i];
    if (c.length == 1) 
      (window.parent._wrap_setLastFunctionCall("canvastext.js",5198,126951,126964,chars.push,false) ||     chars.push(c));
    else {
      var entity = (window.parent._wrap_setLastFunctionCall("canvastext.js",5200,127022,127050,c.substring,false) || c.substring(1, c.length - 1));
      if (CanvasText.specialchars[entity]) 
        (window.parent._wrap_setLastFunctionCall("canvastext.js",5202,127133,127151,chars.push,false) ||       chars.push(entity));
      else 
        chars = (window.parent._wrap_setLastFunctionCall("canvastext.js",5204,127210,127235,chars.concat,false) || chars.concat((window.parent._wrap_setLastFunctionCall("canvastext.js",5204,127223,127234,c.toArray,false) || c.toArray())));
    }
  }
  for (i = 0; i < chars.length; i++) {
    c = chars[i];
    if (c = CanvasText.letters[c] || CanvasText.specialchars[c]) 
      (window.parent._wrap_setLastFunctionCall("canvastext.js",5210,127445,127459,result.push,false) ||     result.push(c));
  }
  return CanvasText._bufferLexemes[str] = (window.parent._wrap_setLastFunctionCall("canvastext.js",5212,127527,127543,result.compact,false) || result.compact());
}, ascent: function(style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5214, 127572,127689, (typeof arguments === 'object' ? arguments.callee.caller : null));

  style = style || {};
  return style.size || CanvasText.style.size;
}, descent: function(style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5218, 127708,127836, (typeof arguments === 'object' ? arguments.callee.caller : null));

  style = style || {};
  return 7 * (style.size || CanvasText.style.size) / 25;
}, measure: function(str, style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5222, 127855,128380, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!str) 
    return;
  style = style || {};
  var i, width, lexemes = (window.parent._wrap_setLastFunctionCall("canvastext.js",5226,127994,128022,CanvasText.parseLexemes,false) || CanvasText.parseLexemes(str)), total = 0;
  for (i = lexemes.length - 1; i > -1; --i) {
    c = lexemes[i];
    width = c.diacritic ? (window.parent._wrap_setLastFunctionCall("canvastext.js",5229,128161,128188,CanvasText.letter,false) || CanvasText.letter(c.letter)).width : c.width;
    total += width * (style.tracking || CanvasText.style.tracking) * (style.size || CanvasText.style.size) / 25;
  }
  return total;
}, getDimensions: function(str, style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5234, 128405,128960, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var width = (window.parent._wrap_setLastFunctionCall("canvastext.js",5235,128453,128483,CanvasText.measure,false) || CanvasText.measure(str, style)), height = style.size || CanvasText.style.size, angle = style.angle || CanvasText.style.angle;
  if (style.angle == 0) 
    return {width: width, height: height};
  return {width: (window.parent._wrap_setLastFunctionCall("canvastext.js",5242,128769,128802,Math.abs,false) || Math.abs((window.parent._wrap_setLastFunctionCall("canvastext.js",5242,128778,128793,Math.cos,false) || Math.cos(angle)) * width)) + (window.parent._wrap_setLastFunctionCall("canvastext.js",5242,128805,128839,Math.abs,false) || Math.abs((window.parent._wrap_setLastFunctionCall("canvastext.js",5242,128814,128829,Math.sin,false) || Math.sin(angle)) * height)), height: (window.parent._wrap_setLastFunctionCall("canvastext.js",5243,128865,128898,Math.abs,false) || Math.abs((window.parent._wrap_setLastFunctionCall("canvastext.js",5243,128874,128889,Math.sin,false) || Math.sin(angle)) * width)) + (window.parent._wrap_setLastFunctionCall("canvastext.js",5243,128901,128935,Math.abs,false) || Math.abs((window.parent._wrap_setLastFunctionCall("canvastext.js",5243,128910,128925,Math.cos,false) || Math.cos(angle)) * height))};
}, getBestAlign: function(angle, style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5246, 128984,129454, (typeof arguments === 'object' ? arguments.callee.caller : null));

  angle += (window.parent._wrap_setLastFunctionCall("canvastext.js",5247,129031,129087,CanvasText.getAngleFromAlign,false) || CanvasText.getAngleFromAlign(style.halign, style.valign));
  var a = {h: 'c', v: 'm'};
  if ((window.parent._wrap_setLastFunctionCall("canvastext.js",5252,129201,129235,Math.round,false) || Math.round((window.parent._wrap_setLastFunctionCall("canvastext.js",5252,129212,129227,Math.cos,false) || Math.cos(angle)) * 1000)) / 1000 != 0) 
    a.h = (window.parent._wrap_setLastFunctionCall("canvastext.js",5253,129271,129286,Math.cos,false) || Math.cos(angle)) > 0 ? 'r' : 'l';
  if ((window.parent._wrap_setLastFunctionCall("canvastext.js",5254,129320,129354,Math.round,false) || Math.round((window.parent._wrap_setLastFunctionCall("canvastext.js",5254,129331,129346,Math.sin,false) || Math.sin(angle)) * 1000)) / 1000 != 0) 
    a.v = (window.parent._wrap_setLastFunctionCall("canvastext.js",5255,129390,129405,Math.sin,false) || Math.sin(angle)) > 0 ? 't' : 'b';
  return a;
}, getAngleFromAlign: function(halign, valign) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5258, 129483,129928, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var pi = Math.PI, table = {'rm': 0, 'rt': pi / 4, 'ct': pi / 2, 'lt': 3 * (pi / 4), 'lm': pi, 'lb': -3 * (pi / 4), 'cb': -pi / 2, 'rb': -pi / 4, 'cm': 0};
  return table[halign + valign];
}, drawPoints: function(ctx, points, x, y, mag, offset) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5272, 129950,130683, (typeof arguments === 'object' ? arguments.callee.caller : null));

  var i, a, penUp = true, needStroke = 0;
  offset = offset || {x: 0, y: 0};
(window.parent._wrap_setLastFunctionCall("canvastext.js",5278,130149,130164,ctx.beginPath,false) ||   ctx.beginPath());
  for (i = 0; i < points.length; i++) {
    a = points[i];
    if (!a) {
      penUp = true;
      continue;
    }
    if (penUp) {
(window.parent._wrap_setLastFunctionCall("canvastext.js",5286,130404,130468,ctx.moveTo,false) ||       ctx.moveTo(x + a[0] * mag + offset.x, y - a[1] * mag + offset.y));
      penUp = false;
    } else {
(window.parent._wrap_setLastFunctionCall("canvastext.js",5289,130550,130614,ctx.lineTo,false) ||       ctx.lineTo(x + a[0] * mag + offset.x, y - a[1] * mag + offset.y));
    }
  }
(window.parent._wrap_setLastFunctionCall("canvastext.js",5292,130660,130672,ctx.stroke,false) ||   ctx.stroke());
}, draw: function(ctx, str, xOrig, yOrig, style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5294, 130699,133990, (typeof arguments === 'object' ? arguments.callee.caller : null));

  if (!str) 
    return;
  style = style || CanvasText.style;
  style.halign = style.halign || CanvasText.style.halign;
  style.valign = style.valign || CanvasText.style.valign;
  style.angle = style.angle || CanvasText.style.angle;
  style.size = style.size || CanvasText.style.size;
  style.adjustAlign = style.adjustAlign || CanvasText.style.adjustAlign;
  var i, c, total = 0, mag = style.size / 25, x = 0, y = 0, lexemes = (window.parent._wrap_setLastFunctionCall("canvastext.js",5303,131261,131289,CanvasText.parseLexemes,false) || CanvasText.parseLexemes(str));
  var offset = {x: 0, y: 0}, measure = (window.parent._wrap_setLastFunctionCall("canvastext.js",5307,131398,131428,CanvasText.measure,false) || CanvasText.measure(str, style)), align;
  if (style.adjustAlign) {
    align = (window.parent._wrap_setLastFunctionCall("canvastext.js",5309,131498,131541,CanvasText.getBestAlign,false) || CanvasText.getBestAlign(style.angle, style));
    style.halign = align.h;
    style.valign = align.v;
  }
  switch (style.halign) {
    case 'l':
      break;
    case 'c':
      offset.x = -measure / 2;
      break;
    case 'r':
      offset.x = -measure;
      break;
  }
  switch (style.valign) {
    case 'b':
      break;
    case 'm':
      offset.y = style.size / 2;
      break;
    case 't':
      offset.y = style.size;
      break;
  }
(window.parent._wrap_setLastFunctionCall("canvastext.js",5333,132179,132189,ctx.save,false) ||   ctx.save());
(window.parent._wrap_setLastFunctionCall("canvastext.js",5334,132203,132230,ctx.translate,false) ||   ctx.translate(xOrig, yOrig));
(window.parent._wrap_setLastFunctionCall("canvastext.js",5335,132244,132267,ctx.rotate,false) ||   ctx.rotate(style.angle));
  ctx.lineCap = 'round';
  ctx.lineWidth = 2 * mag * (style.weight || CanvasText.style.weight);
  ctx.strokeStyle = style.color || CanvasText.style.color;
  for (i = 0; i < lexemes.length; i++) {
    c = lexemes[i];
    if (c.width == -1) {
      x = 0;
      y = style.size * 1.4;
      continue;
    }
    var points = c.points, width = c.width;
    if (c.diacritic) {
      var dia = CanvasText.diacritics[c.diacritic];
      var char = (window.parent._wrap_setLastFunctionCall("canvastext.js",5349,132879,132906,CanvasText.letter,false) || CanvasText.letter(c.letter));
(window.parent._wrap_setLastFunctionCall("canvastext.js",5350,132928,133032,CanvasText.drawPoints,false) ||       CanvasText.drawPoints(ctx, dia.points, x, y - ((window.parent._wrap_setLastFunctionCall("canvastext.js",5350,132975,132997,c.letter.toUpperCase,false) || c.letter.toUpperCase()) == c.letter ? 3 : 0), mag, offset));
      points = char.points;
      width = char.width;
    }
(window.parent._wrap_setLastFunctionCall("canvastext.js",5354,133150,133203,CanvasText.drawPoints,false) ||     CanvasText.drawPoints(ctx, points, x, y, mag, offset));
    if (CanvasText.debug) {
(window.parent._wrap_setLastFunctionCall("canvastext.js",5356,133265,133275,ctx.save,false) ||       ctx.save());
      ctx.lineJoin = 'miter';
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = style.boundingBoxColor || CanvasText.style.boundingBoxColor;
(window.parent._wrap_setLastFunctionCall("canvastext.js",5360,133481,133549,ctx.strokeRect,false) ||       ctx.strokeRect(x + offset.x, y + offset.y, width * mag, -style.size));
      ctx.fillStyle = style.originPointColor || CanvasText.style.originPointColor;
(window.parent._wrap_setLastFunctionCall("canvastext.js",5362,133668,133683,ctx.beginPath,false) ||       ctx.beginPath());
(window.parent._wrap_setLastFunctionCall("canvastext.js",5363,133705,133745,ctx.arc,false) ||       ctx.arc(0, 0, 1.5, 0, Math.PI * 2, true));
(window.parent._wrap_setLastFunctionCall("canvastext.js",5364,133767,133777,ctx.fill,false) ||       ctx.fill());
(window.parent._wrap_setLastFunctionCall("canvastext.js",5365,133799,133812,ctx.restore,false) ||       ctx.restore());
    }
    x += width * mag * (style.tracking || CanvasText.style.tracking);
  }
(window.parent._wrap_setLastFunctionCall("canvastext.js",5369,133940,133953,ctx.restore,false) ||   ctx.restore());
  return total;
}, enable: function(ctx) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5372, 134008,134657, (typeof arguments === 'object' ? arguments.callee.caller : null));

  ctx.drawText = function(text, x, y, style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5373, 134052,134160, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("canvastext.js",5374,134106,134145,CanvasText.draw,false) || CanvasText.draw(ctx, text, x, y, style));
};
  ctx.measureText = function(text, style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5376, 134192,134286, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("canvastext.js",5377,134240,134271,CanvasText.measure,false) || CanvasText.measure(text, style));
};
  ctx.getTextBounds = function(text, style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5379, 134320,134420, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("canvastext.js",5380,134368,134405,CanvasText.getDimensions,false) || CanvasText.getDimensions(text, style));
};
  ctx.fontAscent = function(style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5382, 134451,134532, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("canvastext.js",5383,134493,134517,CanvasText.ascent,false) || CanvasText.ascent(style));
};
  ctx.fontDescent = function(style) {
window.parent._wrap_addFunctionToMap('canvastext.js', 5385, 134564,134646, (typeof arguments === 'object' ? arguments.callee.caller : null));

  return (window.parent._wrap_setLastFunctionCall("canvastext.js",5386,134606,134631,CanvasText.descent,false) || CanvasText.descent(style));
};
}};
