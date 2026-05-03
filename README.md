# Algorithm Problems

A collection of small JavaScript algorithm demos and exercises. Each problem lives in its own folder and can be opened in a browser. Some algorithms also export pure functions so they can be tested with Jest.

## Problems

| Folder | Description | Test coverage |
|--------|-------------|---------------|
| `anagrams` | Finds anagrams for a word from a dictionary list | Yes |
| `frequency-counter` | Counts character and word frequencies in text | Yes |
| `hanoi-tower` | Browser-based Tower of Hanoi game | Browser demo |
| `number-to-word` | Converts numbers from `0` to `9999` into English words | Yes |
| `rock-paper-scissor` | Browser-based Rock, Paper, Scissors game | Browser demo |
| `rolling-dice` | Simulates 1,000 rolls of two dice and renders counts | Browser demo |

## Requirements

- [Node.js](https://nodejs.org/) 20 or later for local tests
- A modern browser for the interactive demos

## Install

```bash
npm install
```

## Run Tests

```bash
npm test
```

The test suite uses Jest and currently covers `anagrams`, `frequency-counter`, and `number-to-word`.

## Continuous Integration

GitHub Actions runs the Jest suite on every push to `main` and every pull request targeting `main`.

Workflow file:

```text
.github/workflows/ci.yml
```

## Run Browser Demos

Open any problem's `index.html` file in a browser. For example:

```bash
open anagrams/index.html
open frequency-counter/index.html
open hanoi-tower/index.html
open number-to-word/index.html
open rock-paper-scissor/index.html
open rolling-dice/index.html
```

## Algorithm Examples

### Anagrams

Finds all dictionary words that contain the same letters as the input word.

```js
const { alphabetize, getAnagramsOf } = require('./anagrams');

alphabetize('Silent');
// 'eilnst'

getAnagramsOf('listen', ['listen', 'silent', 'enlist', 'google']);
// ['listen', 'silent', 'enlist']
```

Browser demo:

```bash
open anagrams/index.html
```

### Frequency Counter

Normalizes input text, then counts characters and words.

```js
const { normalizeText, countCharacters, countWords } = require('./frequency-counter/frequency');

normalizeText('Hello, World! 123');
// 'hello world '

countCharacters('Aa b!');
// { a: 2, ' ': 1, b: 1 }

countWords('Safia world usa. Safia from bangladesh.');
// { safia: 2, world: 1, usa: 1, from: 1, bangladesh: 1 }
```

Browser demo:

```bash
open frequency-counter/index.html
```

### Hanoi Tower

A browser game for moving disks between towers. The goal is to move all disks to another tower while never placing a larger disk on top of a smaller disk.

Example move sequence for three disks:

```text
A -> C
A -> B
C -> B
A -> C
B -> A
B -> C
A -> C
```

Browser demo:

```bash
open hanoi-tower/index.html
```

### Number To Word

Converts supported numbers into English words.

```js
const { convertToWord } = require('./number-to-word');

convertToWord(0);
// 'zero'

convertToWord(42);
// 'Forty Two'

convertToWord(305);
// 'Three hundred Five'

convertToWord(9999);
// 'Nine thousand Nine hundred Ninety Nine'
```

Limits:

- Negative numbers throw an error.
- Numbers greater than `9999` are not supported.

Browser demo:

```bash
open number-to-word/index.html
```

### Rock Paper Scissor

A browser game that compares the player's choice with a random computer choice and updates the score.

Sample outcomes:

```text
rock vs scissors -> You wins!
paper vs scissors -> Computer wins!
rock vs rock -> It's a tie
```

Browser demo:

```bash
open rock-paper-scissor/index.html
```

### Rolling Dice

Simulates rolling two six-sided dice 1,000 times. It counts totals from `2` through `12` and renders a simple bar graph.

Sample output shape:

```text
2: 24
3: 51
4: 86
...
12: 31
```

The exact counts change on every page load because the rolls are random.

Browser demo:

```bash
open rolling-dice/index.html
```

## Project Structure

```text
algorithm-problems/
├── .github/workflows/ci.yml
├── anagrams/
├── frequency-counter/
├── hanoi-tower/
├── number-to-word/
├── rock-paper-scissor/
├── rolling-dice/
├── package.json
└── package-lock.json
```
