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

app.get('/', (req, res) => {
    let response =  printMatthew();
  res.send(`Hello World! <br /> ${response}`);
})    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




function printKjvInfo() {
    // Print some module information
    var kjv = sword.getLocalModule('KJV');
    return kjv.description + ' ' + kjv.about;
  }
  
  function printMatthew() {
    var text = '';
    // Get the verses of the Gospel of Matthew
    var verses = sword.getBookText('KJV', 'Mat');
  
    // Do something with the verses
    for (var i = 0; i < verses.length; i++) {
      var currentVerse = verses[i];
      var verseReference = currentVerse.chapter + ':' + currentVerse.verseNr;
      console.log('printMatthew', verseReference + ' '  + currentVerse.content)
      text = text + verseReference + ' '  + currentVerse.content;
    }
    return text;
  }
  