const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const client = require('./configuration/config')

const app = express();
app.use(helmet());
app.use(express.json());


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.get('/', async (req,res) => {
    try{
        const allblogs =  await client.query("SELECT * FROM  users");
        res.json(allblogs.rows);
    }

    catch(err){
        console.error(err.message);
    }
});



//Start server
const port = 8080;
app.listen(port, ()=> {
    console.log(`App listening in ${port}`);
});
module.exports = app;