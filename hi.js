// exec.js
const { exec } = require('child_process');

/**
 * Execute a shell command.
 * @param {string} command - The command to execute.
 * @param {function} callback - Callback function to handle the result or error.
 */
function executeCommand(command, callback) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${command}`);
      console.error(stderr);
      callback(error, null);
    } else {
      console.log(`Command executed successfully: ${command}`);
      console.log(stdout);
      callback(null, stdout);
    }
  });
}

module.exports = executeCommand;
