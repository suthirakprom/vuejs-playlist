new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Ninja',
        website: 'http://www.thenetninja.co.uk',                //and also the website must has https in front in order to work
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
    },
    methods: {                              //it has to always be 'methods'
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
