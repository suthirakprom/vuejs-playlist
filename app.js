new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja'
    },
    methods: {
        greet: function(time){ //here is what I call variable time 
            return 'Good ' + time + ', ' + this.name; //we use this.name here to call out name from data.
        }
    }
});
