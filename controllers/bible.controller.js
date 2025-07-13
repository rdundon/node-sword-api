const bibleController = {};


bibleController.getMatthew = (req, res) => {
    app.get('/', (req, res) => {
        let response =  printMatthew();
      res.send(`Book of Matthew: <br /> ${response}`);
    })    
    

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