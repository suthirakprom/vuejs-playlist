new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){         //using variable here and will pass arguement in HTML file
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){  //not sure why they added event here too
            this.x = event.offsetX; //offset here is like the location 
            this.y = event.offsetY;
        }
    }
});
