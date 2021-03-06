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
  let dummykeys = [
    {
      type: 'keywords',
      id: 'key1',
      document_id:"docid1",
      attributes: {
        name: "Keyword1",
        value: "Value1"
      }
    },{
      type: 'keywords',
      id: 'key3',
      document_id:"docid1",
      attributes: {
        name: "Keyword3",
        value: "Value3"
      }
    },{
      type: 'keywords',
      id: 'key2',
      document_id: "docid2",
      attributes: {
        name: "Keyword2",
        value: "Value2"
      }
    }

  ];
  let counter = dummydocs.length+1;

  this.get('/documents', function () {
    var result = JSON.parse(JSON.stringify(dummydocs));
    result.forEach(function(v){ delete v.attributes.image});
    return { data: result };
  });

  this.get('/keywords',  function (db, request) {
    var foundKeys = dummykeys.filter((keyword) => request.queryParams.document_id === keyword.document_id);
    if(foundKeys) {
      return { data: foundKeys };
    } else {
      //return new Response(404, {}, {});
    }
  });

  // Find and return the provided document from our document list above
  this.get('/documents/:id', function (db, request) {
    var foundDoc = dummydocs.find((document) => request.params.id === document.id);
    if(foundDoc) {
      return { data: foundDoc };
    } else {
     // return new Mirage.Response(404, null, null);
    }
  });

  this.post('/documents', function(db, request) {
    var document = JSON.parse(request.requestBody);
    document.data.id="docid"+(counter++);
    dummydocs.push(document.data);
    return document;
  });

  this.del('/documents/:id', (db, request) => {
    //let id = request.params.id;
    var docToDel = dummydocs.find((document) => request.params.id === document.id);
    dummydocs.pop(docToDel);
  });
  
  
}
