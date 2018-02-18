let url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

let colors = ["#A7BED3", "#C6E2E9", "#F1FFC4", "#FFCAAF", "#DAB894", "#DCEDB9", "#D259E", "#CBD081", "#918868", "#3A405A", "#F9DEC9", "#99B2DD", "#E9AFA3", "#685044", "#474A2C", "#636940", "#59A96A", "#B4E7CE", "#A0ECD0", "##94DDBC", "714955", "#B4E7CE"];

let settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET"
}

$(document).ready(function(){
    
    $.getJSON(settings, function(response, success) {
        console.log(success);
        console.log(response);
    }); // End of ajax call

}); // End of document.ready

function changeColor(){
    let random = (Math.floor(Math.random(colors.length - 1)*colors.length));
    document.body.style.backgroundColor = colors[random];
}