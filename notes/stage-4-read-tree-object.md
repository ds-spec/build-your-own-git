### Prerequisite Knowledge
A **tree object** in Git maps filenames to their corresponding blob IDs, addressing the limitation of blobs, which store raw file content without context about filenames or directory structure.

---

### Key Concepts

1. **Blob**: Stores raw file content.
2. **Tree**: Maps filenames, directory structure, and permissions to blob IDs.

---

### Example

```plaintext
040000 tree 3f79f7a73f8e72eef8eae116584ecea8f2f78231    notes
```

- **040000**: Mode indicating the type (e.g., directory).
- **tree**: Object type.
- **3f79f7a...**: SHA-1 hash of the tree or blob.
- **notes**: Filename or directory name.

---

### Why Trees?

Trees connect filenames to blob IDs, represent directory structures, and store file permissions, making them essential for organizing files in Git repositories.

---

### Challenge: Reading a Tree Object

#### Thought Process:

1. Use `git ls-tree <tree_sha>` to list the tree contents.
2. Parse the tree SHA to identify directories and files.
3. Verify the tree header; throw an error if missing.
4. Transform the hash into a readable format to determine the file type (e.g., blob).
5. Extract the filename from the tree output.
6. Convert file content to its hash and present the result.
