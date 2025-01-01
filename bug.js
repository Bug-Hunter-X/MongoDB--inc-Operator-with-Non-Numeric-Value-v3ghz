```javascript
//Incorrect use of $inc operator in update query
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:NaN}});
```