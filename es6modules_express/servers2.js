import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.get('/', (req, res) => {
//     const user = {
//         name: 'Samuel',
//         hobby:'sooftware'
//     };
//     res.send(user);
// })

// app.get("/user", (req, res) => {
//     res.send("user");
// })

// next middleware for restapi use /:id
app.get("/:id", (req, res) => {
    //req.query ==>rest api lesson
    //req.body ==>rest api lesson
    //req.header ==>rest api lesson
    //req.params ==>rest api lesson
     console.log(req.params) 
    // res.send("welcome to postman")
    // below for rest api lesson
    res.status(404).send("not found")
    
})
app.get("/postman", (req, res) => {
    res.send("Hellooooooooo")
    
})

app.post("/profile",(req,res)=>{
    console.log(req.body)
    const user = {
        
        name: 'Samuel',
        hobby:'sooftware'
    };
    res.send("sucess")
})



app.listen(3000);