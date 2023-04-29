//show dbs
//use shild
//show collections

//create
for (let i = 0; i <= 1000; i++) {
  db.users.insert({
    nome: `Jose-${i}`,
    type: 'AGENT',
  });
}

// read
db.users.find().limit(1000);

// update
db.users.update(
  { _id: ObjectId('61b3b58120627c48f44be027') },
  {
    $set: { nome: 'carlos' },
  },
);


db.users.remove({ nome: 'maria'})
