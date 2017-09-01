import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        var document = this.get('store').findRecord('document', params.document_id);
        this.store.query('keyword', { document_id: params.document_id }).then((keywords) => {
            document.set("keywords",keywords);
          });
        
        return document;
      }
});
