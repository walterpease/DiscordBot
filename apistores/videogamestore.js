module.exports = {
    getGamesAsync: function(){
        let data = fetch("https://localhost:44367/api/VideoGames")
            .then((response) => response.blob())
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(error => {
                console.error(error);
            });
        
        console.log(data);
    },
}