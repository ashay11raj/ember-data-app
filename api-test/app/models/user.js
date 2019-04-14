import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    post: DS.hasMany('post'),
    name: DS.attr("string"),
    email: DS.attr("string"),
    phone: DS.attr("string"),
    website: DS.attr("string")
});
