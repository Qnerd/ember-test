export default function () {
  this.namespace = '/rest';


  let dummydocs = [
    {
      type: 'documents',
      id: 'docid1',
      attributes: {
        image: "https://dummyimage.com/600x800/d108d1/ffffff.png"
      }
    }, {
      type: 'documents',
      id: 'docid2',
      attributes: {
        image: "https://dummyimage.com/600x800/5ecf08/ffffff.png"
      }
    }

  ];
  let counter = dummydocs.length+1;

  this.get('/documents', function () {
    return { data: dummydocs };
  });

  // Find and return the provided document from our document list above
  this.get('/documents/:id', function (db, request) {
    var foundDoc = dummydocs.find((document) => request.params.id === document.id);
    if(foundDoc) {
      return { data: foundDoc };
    } else {
      return new Mirage.Response(404, null, null);
    }
  });

  this.post('/documents', function(db, request) {
    var document = JSON.parse(request.requestBody);
    document.data.id="docid"+(counter++);
    dummydocs.push(document.data);
    return document;
  });

  this.del('/documents/:id', (db, request) => {
    let id = request.params.id;
    var docToDel = dummydocs.find((document) => request.params.id === document.id);
    dummydocs.pop(docToDel);
  });
  
  
}
