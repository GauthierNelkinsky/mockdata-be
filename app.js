const express = require('express'); 
  
const app = express(); 
var cors = require('cors');
app.use(cors("http://localhost:3000"));
const PORT = 3001; 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 

var math = require('mathjs');

var mb_out = math.random() * 100;
var mb_in = math.random() * 100;

app.get('/', (req, res)=>{ 
    res.status(200);
    /* Reduce or increase randomly the value of mb_out and mb_in each time the route is called*/
    mb_out_nb = math.random() * 4;
    mb_in_nb = math.random() * 4;

    if (math.random() > 0.5) {
        if (mb_out + mb_out_nb > 100) {
            mb_out -= mb_out_nb;
        }
        else {
            mb_out += mb_out_nb;
        }
    } else {
        if (mb_out - mb_out_nb < 0) {
            mb_out += mb_out_nb;
        }
        else {
            mb_out -= mb_out_nb;
        }
    }

    if (math.random() > 0.5) {
        if (mb_in + mb_in_nb > 100) {
            mb_in -= mb_in_nb;
        }
        else {
            mb_in += mb_in_nb;
        }
    } else {
        if (mb_in - mb_in_nb < 0) {
            mb_in += mb_in_nb;
        }
        else {
            mb_in -= mb_in_nb;
        }
    }
    
    res.json({ 
        mb_out: mb_out, 
        mb_in: mb_in,
        timestamp: Date.now()
    });
}); 