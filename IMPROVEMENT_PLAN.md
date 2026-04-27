# Improvement Plan: algorithm-problem

## Overview
Six standalone vanilla JS mini-projects with no tests, no shared utilities, and no build pipeline. Good as individual exercises but hard to maintain or extend at scale.

## Improvements

### Testing
- Add Jest unit tests for the algorithm logic in each project (anagrams, frequency-counter, number-to-word)
- Separate business logic from DOM manipulation so it can be tested in isolation
- Add a root-level `package.json` with `npm test` wired to Jest across all subfolders

### Code Quality
- Convert from plain JS to TypeScript — especially useful for the algorithm exercises to enforce input/output types
- Add ESLint + Prettier
- Extract shared utility functions (e.g., input parsing, result rendering) into a common `utils/` module

### Modernization
- Replace `<script>` tag includes with ES modules (`import`/`export`)
- Add Vite for a dev server with hot reload across all projects

### Documentation
- Add a README to each subfolder describing the algorithm problem, the approach used, and time/space complexity
- Add inline complexity annotations (`// O(n)`, `// O(1) space`) to key functions

### Features
- Add more algorithm categories: sorting, searching, dynamic programming, graph traversal
- Add a root `index.html` linking to all exercises as a mini portfolio page
