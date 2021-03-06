// AJAX - Asynchronous JavaScript And XML
// axios is a library with pre built function to use AJAX

// the first parameter is the relative URL of the file
// instruct javascript to fetch data.json
axios.get('data.json').then(function(response){
    console.log("data has been fetched finished");
    let movie = response.data;
    console.log(movie);
    document.querySelector('#title').innerHTML = movie.title;
    document.querySelector('#year_released').innerHTML = movie.year_released;
})
// move on to the next line while the data.json is being fetched in the background
console.log('this is line 14')