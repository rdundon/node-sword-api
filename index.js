const NodeSwordInterface = require('node-sword-interface');
const sword = new NodeSwordInterface();

const express = require('express');
const app = express();
const port = 3000;

// Example from README: https://github.com/ezra-bible-app/node-sword-interface?tab=readme-ov-file#example-installing-the-kjv-module
async function installKJV() {
    console.log("Updating repository configuration ...");
    await sword.updateRepositoryConfig();
  
    console.log("Installing King James module");
    // Install the King James Version (Uses the internet connection to download and install the module)
    await sword.installModule('KJV');
  }
  installKJV().then(() => {
    console.log("Installation of KJV successfully completed!");
    console.log(printKjvInfo());
  });


app.get('/:chapter/:verse', (req, res) => {
  const chapter = req.params.chapter * 1;
  const verse = req.params.verse * 1;
   const chapterTest = sword.getChapterText('KJV', 'Mat', chapter);
  let response = chapterTest.content;
  res.send(`Chapter ${chapter}, Verse ${verse} <br /> ${response}`);
})


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


app.use('/', require('./routes'))


function printKjvInfo() {
    // Print some module information
    var kjv = sword.getLocalModule('KJV');
    return kjv.description + ' ' + kjv.about;
  }
  
  
  module.exports = app;