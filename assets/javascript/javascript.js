$(document).ready(function(){
    let url = "https://api.forismatic.com/api/1.0/";
    let url2 = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";

    let settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET"
    }

    $.getJSON(settings, function(response) {
        console.log(response);
    }); // End of ajax call
}); // End of document.ready