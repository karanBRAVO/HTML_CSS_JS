const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/myApp`

mongoose.connect(url).then(() => {
    console.log(`connection successful`);
}).catch((err) => {
    console.log(`Cannot Connect to database`);
    console.log(err);
})
