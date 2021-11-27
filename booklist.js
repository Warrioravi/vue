const app = Vue.createApp({// this object can have data()m and methods
    data() {
        return {
            books: [{ name: "The Karma", author: 'unknown',image:"./image0.jpeg",isFav:false },
                     {name: "The secret of nagas", author: 'unknown',image:"./image1.jpeg",isFav:true  },
                     {name: "The lost village", author: 'unknown',image:"./image2.jpeg",isFav:false  },
                     {name:"The last night",author:'unknown',image:"./image3.jpeg",isFav:false }],
           isHidden:false

        }
    },
    methods: {
        favHandler(book){
            book.isFav=!book.isFav;
        }
        
    }
})
app.mount("#app");