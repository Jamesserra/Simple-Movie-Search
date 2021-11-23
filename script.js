let httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      let movie = JSON.parse(httpRequest.responseText);
      movie.Search.forEach(function (item) {
        let title = item.Title;
        let year = item.Year;
        let imdb = item.imdbID;
        let poster = item.Poster;
    
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        let a = document.createElement('a');                 
        let link = document.createTextNode(title);                  
        a.appendChild(link);                                     
        a.href = "https://www.imdb.com/title/" + imdb;                 
        newDiv.appendChild(a); 
        
        let htmlString = 'Year: ' + year;
        $(newDiv).append("<p>" + htmlString + "</p>");

        let img = document.createElement('img');
        img.src = poster;
        newDiv.appendChild(img);    
      });
    
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

let searchMovie = function () {
  let input = document.querySelector('input').value;
  if (input) {
    httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + input + '&type=movie&apikey=b7da8d63');
    httpRequest.send(null);
  }
}