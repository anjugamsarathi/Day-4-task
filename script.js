

XML-HttpRequest
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all") /* opening data that we need from server */
xhr.send(); /* Sending to browser That data */

xhr.responseType = "json" /* Data type */

xhr.onload = function displayResult() {
    const countries = xhr.response;
    console.log(countries)
    console.log(countries.length)
    for (i = 0; i < countries.length; i++) {
        console.log(countries[i].flags)
    }
}