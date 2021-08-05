const axios = require('axios');


let cache = {};

function getmovies(req, res) {
    let { searchQuery } = req.query
    console.log(searchQuery);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuery}`
    
    if(cache[selectedCity] !== undefined) {
        console.log('The source of data is our server 💻')
        res.send(cache[selectedCity]);
    } else {
    
    
    axios.get(url)
        .then(result => {
            let newMovie = result.data.results.map(elem => {
                 new Movies(elem);
                cache[selectedCity] = newMovie;
            })

            res.send(newMovie)
        }).catch(err =>{
            console.log(err);
            res.send(err)
        }

        )
    }

}

function Movies(obj){
    this.title= obj.title,
    this.overview= obj.overview,
    this.average_votes= obj.vote_average,
    this.total_votes= obj.vote_average,
    this.image_url= obj.poster_path ,
    this.popularity= obj.popularity,
    this.released_on= obj.release_date
}

module.exports=getmovies