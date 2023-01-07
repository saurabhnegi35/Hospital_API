const express = require('express');
const app = express();
const port = process.env.PORT || 2000

app.listen(port, ()=> {
    console.log(`Server is Up and Running at Port ${port}`);
});
