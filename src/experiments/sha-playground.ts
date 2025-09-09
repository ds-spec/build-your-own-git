// Git doesn’t “store filenames + contents” → it stores hash-addressed blobs.

// Every commit, tree, and blob is fundamentally “hash(content + header)”.

import { createHash } from "crypto";

const sha1hash = createHash("sha1").update("hello world\n").digest("hex");
console.log("SHA-1 Hash:", sha1hash);
const sha256hash = createHash("sha256").update("hello world\n").digest("hex");
console.log("SHA-256 Hash:", sha256hash);

// Example
const content = Buffer.from("git object");
const header = Buffer.from(`blob ${content.byteLength}\0`);
const blob = Buffer.concat([header, content]);
const hash = createHash("sha1").update(blob).digest("hex");
console.log("SHA-1 Hash:", hash);
