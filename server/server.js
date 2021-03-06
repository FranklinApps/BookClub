const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./routes/user.routes')(app);
require('./config/mongoose.config');


app.listen(8000, () => {console.log("Listening on 8000")});
