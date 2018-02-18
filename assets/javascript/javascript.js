let url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

let colors = ["#A7BED3", "#C6E2E9", "#F1FFC4", "#FFCAAF", "#DAB894", "#DCEDB9", "#CBD081", "#918868", "#3A405A", "#F9DEC9", "#99B2DD", "#E9AFA3", "#685044", "#474A2C", "#636940", "#59A96A", "#B4E7CE", "#A0ECD0", "#94DDBC", "#714955", "#B4E7CE"];
let fonts = ["#000", "#000", "#000", "#000", "#000", "#000", "#000", "#fff", "#fff", "#000", "#000", "#000", "#fff", "#fff", "#fff", "#fff", "#000", "#000", "#000", "#fff", "#000"];

let quoteText;
let quoteAuthor;
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let icons = document.getElementById('icons');

let settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET"
}

$(document).ready(function () {
    newQuote();
});

function newQuote(){
    $.getJSON(settings, function (response, success) {
        console.log(response);
        quoteText = response.quoteText;
        if(quoteAuthor === ""){
            quoteAuthor = "- Unknown"
            console.log("Unknown!");
        }else{
            quoteAuthor = '- ' + response.quoteAuthor;
        }

        let random = (Math.floor(Math.random(colors.length - 1) * colors.length));

        document.body.style.backgroundColor = colors[random];
        console.log(colors[random]);

        quote.style.color = fonts[random];
        author.style.color = fonts[random];
        icons.style.color = fonts[random];
        quote.innerHTML = quoteText;
        author.innerHTML = quoteAuthor;

    }); // End of ajax call
} 

function twitterFunction(){
    var tweet = quoteText + quoteAuthor;
    $("#tweet-button").attr(
      "href", "https://twitter.com/intent/tweet?text=" + tweet
    );
    console.log(tweet);
  }

// End of newQuote function


// var invocation = new XMLHttpRequest();
// var url = 'http://aruner.net/resources/access-control-with-get/';
// var invocationHistoryText;

// function callOtherDomain() {
//     if (invocation) {
//         invocation.open('GET', url, true);
//         invocation.onreadystatechange = handler;
//         invocation.send();
//     } else {
//         invocationHistoryText = "No Invocation TookPlace At All";
//         var textNode = document.createTextNode(invocationHistoryText);
//         var textDiv = document.getElementById("textDiv");
//         textDiv.appendChild(textNode);
//     }
// }

// function handler(evtXHR) {
//     if (invocation.readyState == 4) {
//         if (invocation.status == 200) {
//             var response = invocation.responseXML;
//             var invocationHistory = response.getElementsByTagName('invocationHistory').item(0).firstChild.data;
//             invocationHistoryText = document.createTextNode(invocationHistory);
//             var textDiv = document.getElementById("textDiv");
//             textDiv.appendChild(invocationHistoryText);

//         } else
//             alert("Invocation Errors Occured");
//     } else
//         dump("currently the application is at" + invocation.readyState);
// }