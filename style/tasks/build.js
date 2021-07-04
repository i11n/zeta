const sass = require("sass");
const fs = require("fs");
const path = require('path');

fs.readdir("./src", (err, files) => {
  if (err) return console.error(err);
  files.filter(file => {
    return path.extname(file) === '.scss'
  }).map(file => path.parse(file)).forEach(file => {
    const outFile = `./dist/css/${file.name}.css`;
    sass.render({
      outputStyle: "compressed",
      file: `./src/${file.name}.scss`,
      outFile
    }, (exception, result) => {
      if (exception) return console.error(exception);
      fs.mkdir(`./dist/css/`, {recursive: true}, (err, path) => {
        if (err) return console.error(err);
        fs.writeFile(outFile, result.css, (err) => {
          if (err) return console.error(err);
          console.info(`Completed compiling to ${outFile}.`);
        })
      })
    }) 
  })
});