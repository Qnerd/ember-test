import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createDoc: function() {
            var color = Math.floor(Math.random()*16777215).toString(16);
            
            var document = this.store.createRecord('document', {image: "https://dummyimage.com/600x800/"+color+"/ffffff.png"});
            document.save();
        },
        removeDoc: function(document) {
            document.deleteRecord();
            document.save();
        },
        testing:  function(document) {
  
            var doc = this.store.find('document', 'gibtsnicht'); // does not exist on server
            var doc2 = this.store.recordForId('document', 'gibtsnicht'); // exists!
            console.log(doc.get('id'));
            console.log(doc2.get('id'));
        },
    }
});
