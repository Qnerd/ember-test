import DS from 'ember-data';

export default DS.Model.extend({
    image: DS.attr(),
    keywords: DS.hasMany('keyword', { async: true })
});
