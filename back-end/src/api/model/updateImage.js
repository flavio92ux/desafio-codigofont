const mongoConnection = require('./connection');

module.exports = async (_id, image) => {
  const db = await mongoConnection.getConnection();
  await db.collection('products').updateOne(
    { _id },
    { $set: { image } },
  );
};