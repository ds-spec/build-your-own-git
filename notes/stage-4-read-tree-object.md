### Prerequisite Knowledge

A **tree object** in Git maps filenames to their corresponding blob IDs, solving the limitation of blobs, which only store raw file content without any context about filenames or directory structure.

---

### Key Concepts

1. **Blob**: Stores raw file content.
2. **Tree**: Adds context by mapping filenames, directory structure, and permissions to blob IDs.

---

### Example

```plaintext
040000 tree 3f79f7a73f8e72eef8eae116584ecea8f2f78231    notes
```

- **040000**: Mode indicating the type (e.g., directory).
- **tree**: Specifies the object type.
- **3f79f7a...**: SHA-1 hash of the tree or blob.
- **notes**: The filename or directory name.

---

### Why Trees?

Blobs alone cannot associate content with filenames or directories. Trees bridge this gap by:

- Connecting filenames to blob IDs.
- Representing directory structures.
- Storing file permissions.

Trees are essential for organizing files and directories in Git repositories.

