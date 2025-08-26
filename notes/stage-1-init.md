## Stage: 1

- The hidden `.git` folder's structure:

  - It contains many folders with multiple refs, head, and remotes.
  - The blob object is hashed using the SHA-1 algorithm to hash the file contents.

- `fs` (File System) module in Node.js:

  - Used to add, modify, delete, and write file/folder contents.

- `process.argv`:
  - Contains the arguments of the folder path we are currently in.
  - `process` is a global object in Node.js, similar to `window` in the browser.
