```javascript
//Proper use of $inc and data validation
db.collection('myCollection').findOne({"_id":ObjectId("someId")}).then(doc=>{
  if(doc && typeof doc.counter === 'number'){
    db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});
  }else{
    console.error("Counter field is not a number or the document is not found");
  }
});
```