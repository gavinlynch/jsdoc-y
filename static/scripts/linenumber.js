'use strict';

(function () {
  var lineId, lines, totalLines, anchorHash;
  var source = document.getElementsByClassName('prettyprint source linenums');
  var i = 0;
  var lineNumber = 0;

  console.log("XXXXXX", source)
  if (source && source[0]) {
    console.log("XXXXXX", source)
    anchorHash = document.location.hash.substring(1);
    lines = source[0].getElementsByTagName('li');
    totalLines = lines.length;

    for (; i < totalLines; i++) {
      lineNumber++;
      lineId = 'line' + lineNumber;
      lines[i].id = lineId;
      if (lineId === anchorHash) {
        lines[i].className += ' selected';
      }
    }
  }
})();
