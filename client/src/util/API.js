import axios from "axios";

export default  {
    getBook : function(book){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
    },
    saveFavorite : function(book){
        console.log(book)
        return axios({
            method: 'post',
            url: '/api/favorites',
            data: book,
            headers: {
                'Content-Type': 'application/json'
            }
          });
    }
}