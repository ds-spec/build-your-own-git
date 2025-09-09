const { Command } = require("commander");
const figlet = require("figlet");

const program = new Command();

console.log(figlet.textSync("BUILD YOUR OWN GIT"));

program
  .version("1.0.1")
  .description("An example CLI for managing directory")
  .option("-l, --ls [value]", "List directory contents")
  .option("-m mkdir <value>", "Create a directory")
  .option("-t --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts;
console.log(options);
