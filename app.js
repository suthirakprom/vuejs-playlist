Vue.component('greeting', {
    template: '<p>Hey there, I am a re-usable component</p>'    //creating components for repeated uses
});

/* new Vue({
    el: '.test',
    template: '<p>I am a template</p>'
}); */

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
