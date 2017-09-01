import DS from 'ember-data';

export default DS.Model.extend({    
    name: DS.attr(),
    value: DS.attr(),    
	document: DS.belongsTo('document')
});
