### Prerequisite Knowledge

The `git hash-object` command is a plumbing command in Git. It takes some data, stores it in the `.git/objects` directory, and returns a unique key (usually a SHA-1 hash) that identifies the object.

### Example:

```bash
echo "hello world" | git hash-object -w --stdin
```

- **`git hash-object`**: Generates a SHA-1 hash (unique identifier) and creates a Git object.
- **`-w` flag**: Writes the content to the `.git/objects` directory as a blob object.
- **`--stdin`**: Reads input from the standard input. In this example, `hello world` is passed as input via the pipe.

### Fun CLI Commands to Try

- `echo "some text" > "file name"`: Creates a file named `file name` and writes `some text` as its content.
- `echo "some new text" >> "file name"`: Appends `some new text` to the existing content of the file.
- `cat > "file name"`: Opens the terminal for input, allowing you to type directly. Whatever you type will be written to the file when you exit (e.g., by pressing `Ctrl+D`).
