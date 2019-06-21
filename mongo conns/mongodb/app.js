const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) throw err;
  // const object = new ObjectId();
  // console.log(object);
  console.log('CONNECTED');
  const db = client.db('animals');

  // CREATING DATA
  //     db.collection('mammals').insertOne({
  //         name: 'fish',
  //         legs: 2
  // }, (err, result)=>{
  //     if (err){ return console.log(err) }
  //     console.log('INSERTED');
  // });

  // READING DATA
  // db.collection('mammals').find().toArray(function (err, result) {
  //     if (err) throw err;
  //     console.log(result)
  // })

  // UPDATING
  // db.collection('mammals').findOneAndUpdate({
  //     _id: new ObjectId('5a5e647384ac5320ba46f8aa')
  // } ,
  //     { $set: {name: 'updated-2'}}
  // ).then(result =>{
  //     console.log(result);
  // }).catch(err =>{
  //     console.log(err);
  // });



  // DELETING
  // db.collection('mammals').deleteMany({name: 'Edwin Diaz'});
  // db.collection('mammals').deleteOne({name: 'Edwin Diaz'});

  db.collection('mammals').findOneAndDelete({
    _id: new ObjectId('5a5e6575274ddf211cbb6cb9')
  }).then(result => {
    console.log(result)
  });

});

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/animals', {useMongoClient: true});
// mongoose.connection
//     .once('open', ()=>console.log('CONNECTED'))
//     .on('error', (err)=>{
//         console.log(`could not connect`, err)
//     });
//