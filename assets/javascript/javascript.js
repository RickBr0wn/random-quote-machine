let url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

let colors = ["#A7BED3", "#C6E2E9", "#F1FFC4", "#FFCAAF", "#DAB894", "#DCEDB9", "#D259EB", "#CBD081", "#918868", "#3A405A", "#F9DEC9", "#99B2DD", "#E9AFA3", "#685044", "#474A2C", "#636940", "#59A96A", "#B4E7CE", "#A0ECD0", "#94DDBC", "#714955", "#B4E7CE"];

let quoteText;
let quoteAuthor;
let quote = document.getElementById('quote');
let author = document.getElementById('author');

let settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET"
}

$(document).ready(function(){
    changeColor();
});

function changeColor(){
    $.getJSON(settings, function(response, success) {
        quoteText = response.quoteText;
        quoteAuthor = '- ' + response.quoteAuthor;
        
        let random = (Math.floor(Math.random(colors.length - 1)*colors.length));
        
        // if(colors[random] == "#DCEDB9" || colors[random] == "#FFCAAF" ||  colors[random] == "#C6E2E9" || colors[random] == "#F1FFC4" || colors[random] == "#F9DEC9"){
        //     console.log("yes!!");
        //     quote.style.color = "#000";
        // }else{
        //     quote.style.color = "#fff";
        // }

        document.body.style.backgroundColor = colors[random];
        console.log(colors[random]);

        quote.innerHTML = quoteText;
        author.innerHTML = quoteAuthor;
    }); // End of ajax call
} // End of changeColor function