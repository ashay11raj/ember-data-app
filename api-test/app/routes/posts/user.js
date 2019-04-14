import Route from '@ember/routing/route';

export default Route.extend({
    model(param){
        return this.store.query('post', {userId: param.id});
    },
    setupController(controller, model){
        Ember.set(controller, "posts", model);
    }

});
