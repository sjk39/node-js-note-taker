# node-js-note-taker
Note taking applications run from the command line, created using node.js.

Requires download of node modules listed in package.json.

Navigate to file location and run 'node yargs.js' (if you have node.js set up on your machine).

Commands:
  yargs.js add --title="" --body=""  Add a new note, title and body provided witin ""
  
  yargs.js remove --title=""         Remove a note
  
  yargs.js read --title=""           Read a note
  
  yargs.js list                      List notes

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  
  e.g. 
  
  Utilises the npm package yargs to allow command line arguments, chalk to style the output and validator to validate string input.
  Good practice using the arrow function notation in JS.
  
  ![image](https://user-images.githubusercontent.com/34311263/118358724-10f31080-b578-11eb-9bf0-3274ae58e05c.png)
