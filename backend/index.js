const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectionDb = async () =>{
    const connectionResult = await mongoose.connect('mongodb+srv://prasanjeet:Prasan007@cluster0.k63hu56.mongodb.net/node-react?retryWrites=true&w=majority');
    return connectionResult;
}
connectionDb().then((result) => {
 console.log('Connected Successfully'); 
}).catch((err) => {
  console.log(err);
});
app.get('/', (req, res) => {
    res.send('App is working');
});

app.listen(5000, () => {
    console.log(`App is running on port 5000`);
});