# node-js-note-taker
Note taking applications run from the command line, created using node.js.

Requires download of node modules listed in package.json.

Navigate to file location and run 'node yargs.js' (if you have node.js set up on your machine).

**Commands:**
  **yargs.js add --title="" --body=""**  _Add a new note, title and body provided witin ""_
  
  **yargs.js remove --title=""**         _Remove a note_
  
  **yargs.js read --title=""**           _Read a note_
  
  **yargs.js list**                      _List notes_

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  
  e.g. 
  
  Utilises the npm package yargs to allow command line arguments, chalk to style the output and validator to validate string input.
  Saves output to a .json file.
  Good practice using the arrow function notation in JS.
  
  ![image](https://user-images.githubusercontent.com/34311263/118358724-10f31080-b578-11eb-9bf0-3274ae58e05c.png)
