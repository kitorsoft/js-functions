function export()
{
  // put your data in a variable
  var data = 'whatever your data is";
  var mimeType = "text/csv"; // use any mime type here
  var fileName = "export.csv"; // if you want to set a filename
    
  var dlurl = 'data:' + mimeType + ';base64,' + btoa(data);
  /* if your data contains Unicode, use this instead:
  var dlurl = 'data:' + mimeType + ';base64,' + b64EncodeUnicode(data);
  */

  try
  {
    saveToFile(dlurl, fileName);
  }
  catch(e)
  {
    console.error(e);
  }
}

// instead of btoa() use this, if the data is in unicode
function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded Unicode,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

function saveToFile(fileURL, fileName)
{
  var save = document.createElement('a');
  save.href = fileURL;
  save.target = '_blank';
  save.download = fileName || 'unknown';

  var evt = new MouseEvent('click',
  {
      //'view': window,
      'bubbles': true,
      'cancelable': false
  });
  save.dispatchEvent(evt);
}
