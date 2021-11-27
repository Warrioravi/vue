const app=Vue.createApp({// this object can have data()m and methods
     data(){
        return {
            title:'My first Vue page',
            author:'Abhishek Kumar',
            age:23,
            showAge:true,
            x:0,
            y:0

        }
     },
     methods:{
            increase(){
                this.age++;
            },
            changeTitle(title){
               this.title="New Title";
            },
            changeVisibility(){
                 this.showAge=!this.showAge;
            },
            handleEvent(e){
                console.log('event');
                console.log(e);
            },
            handleMouseMove(e){
                this.x=e.offsetX;
                this.y=e.offsetY;
            }
     }
})
app.mount("#app");