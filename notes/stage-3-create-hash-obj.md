### Prerequisite Knowledge

The `git hash-object` command is a low-level (plumbing) command in Git. It processes data, stores it in the `.git/objects` directory, and generates a unique identifier (typically a SHA-1 hash) for the object.

### Example:

```bash
echo "hello world" | git hash-object -w --stdin
```

- **`git hash-object`**: Computes a SHA-1 hash (unique identifier) and creates a Git object.
- **`-w` flag**: Ensures the content is written to the `.git/objects` directory as a blob object.
- **`--stdin`**: Accepts input directly from the standard input. In this example, the string `hello world` is piped as input.

### Fun CLI Commands to Explore

- `echo "some text" > "file name"`: Creates a file named `file name` and writes `some text` into it.
- `echo "some new text" >> "file name"`: Appends `some new text` to the existing content of the file.
- `cat > "file name"`: Opens an interactive terminal session for input. The typed content is saved to the file upon exiting (e.g., by pressing `Ctrl+D`).

### Challenge: Creating a Hashed Object

**Thought Process:**

1. Identify the file's location.
2. Read the file's content.
3. Convert the raw text into a buffer for secure handling.
4. Transform the buffer into a hashed value using SHA-1.
5. Save the hashed content in the `.git/objects` directory with the appropriate filename.
6. Utilize `fs.readFileSync` to read the file and `fs.mkdir` to create directories as needed.
