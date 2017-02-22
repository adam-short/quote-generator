var qDisplay = document.querySelector("#quote");
var newQuoteButton = document.querySelector("#new-quote");
var tweetQuoteButton = document.querySelector("#tweet");

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        console.log(xhr.response);
        callback(xhr.response);
      } else {
        return;
      }
    };
    xhr.send();
};

newQuoteButton.onclick = function () {
  var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
  var res = getJSON(url, (res) => {
      qDisplay.innerHTML = '"'+res.quoteText + '"' + '<br>' + "-<i>"
                            + res.quoteAuthor + "</i>"
    });

}

tweetQuoteButton.onclick = function () {
  var url = "http://twitter.com/?tweet="+qDisplay.innerText
  window.open(url);
}
