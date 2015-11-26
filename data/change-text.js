self.on('message', function() {
  var WORD_REPLACEMENTS = [
    {
      words: ['large', 'roomy', 'spacious', 'well presented', 'well-presented'],
      replacement: 'perfectly adequate',
    },
    // America!
    {
      words: ['garden'],
      replacement: 'yard',
    },
    {
      words: ['highly recommended'],
      replacement: 'not, like, a bad idea',
    },
    {
      words: ['semi-detached'],
      replacement: 'attached-to-another-house',
    },
    {
      words: ['briefly comprising'],
      replacement: 'like',
    },
    {
      words: ['local amenities'],
      replacement: 'stuff',
    },
    {
      words: ['highly regarded', 'well maintained', 'fitted kitchen'],
      replacement: '',
    },
    {
      words: ['highly sought after'],
      replacement: 'overhyped',
    },
    {
      words: ['avoid disappointment'],
      replacement: 'see the property',
    },
    {
      words: ['adorable', 'cozy', 'cute'],
      replacement: 'tiny',
    },
  ];

  function replaceWords(words, replacement) {
    for (var i in words) {
      // Haha this is awful.
      document.body.innerHTML = document.body.innerHTML.replace(
        new RegExp(words[i], 'igm'), replacement);
    }
  }

  $(function() {
    for (var i in WORD_REPLACEMENTS) {
      replaceWords(WORD_REPLACEMENTS[i].words,
                   WORD_REPLACEMENTS[i].replacement);
    }
  });
});

self.postMessage(document.URL);
