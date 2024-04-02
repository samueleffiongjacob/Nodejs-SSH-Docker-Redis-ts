import  Express, { response }  from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";
import knex from "knex";
import 'dotenv/config';



const db= knex({
    client: 'pg',
    connection: {
        host : process.env.host_key,
        user : process.env.user,
        password :process.env.password,
        database : process.env.database
    }
})

// testing out pg and knex
// console.log(db.select('*').from('users'));

//  db.select('*').from('users').then(data => {
//      console.log(data);
// })

const app = Express()
app.use(bodyParser.json())
app.use(cors())

// manually created database
// const database1 = {
//     users: [
//         {
//             id: "123",
//             name: "John",
//             email: "john@gmail.com",
//             password: "cookies",
//             entries: 0,
//             joined: new Date()

//         },
//         {
//             id: "124",
//             name: "John333",
//             email: "johnd@gmail.com",
//             password: "cookies",
//             entries: 0,
//             joined: new Date()

//         }
//     ],
//     login: [
//         {
//             id: "987",
//             hash: "hash",
//             email: "john@gmail.com",
//         }
//     ]
// }

app.get("/", (req, res) => {
    res.send(database.users)
})

// manuel sign
// app.post("/signin", (req, res) => {
    
//     if(req.body.email === database.users[0].email && 
//         req.body.password === database.users[0].password){
//             res.json("success");
//         } else {
//         res.status(400).json("error logging in");
//     }
// })

// Signin
// app.post("/signin", (req, res) => {
//     const { email, password } = req.body;
//     db.select('email', 'hash').from('login')
//         .where('email', '=', req.body.email)
//         .then(data => {
//             const isValid = bcrypt.compareSync(password, data[0].hash);
//             if(isValid){
//                 return db.select('*').from('users')
//                 .where('email', '=', email)
//                 .then(user => {
//                     res.json(user[0])
//                 })
//                 .catch(err => res.status(400).json(`unable to get user with email ${email} and password`))
//             } else {
//                 res.status(400).json(`wrong credentials at signin no such user with this email ${email} exit please check and  try again`)
//             }
//         })
//         .catch(err => res.status(400).json(`wrong credentials at signin no such user with this email ${email} exit please check and  try again`))
// })

// Signin modified with errors
app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.email)
        .then(data => {
            if (data.length === 0) {
                // No user found with the provided email
                return res.status(400).json(`User with email ${email} not found. Please check and try again.`);
            }
            const isValid = bcrypt.compareSync(password, data[0].hash);
            if(isValid){
                return db.select('*').from('users')
                    .where('email', '=', email)
                    .then(user => {
                        res.json(user[0])
                    })
                    .catch(err => res.status(500).json("Server error occurred while fetching user details Please check network."));
            } else {
                // Incorrect password
                res.status(400).json(`Incorrect password for email ${email}. Please check and try again.`);
            }
        })
        .catch(err => {
            // Server error occurred
            console.error("Error:", err);
            res.status(500).json("Server error occurred while processing your request.");
        });
});




// manuall register
// app.post("/register", (req, res) => {
//     const { email, name, password } = req.body;
//     // hashing password
//     bcrypt.hash(password, null, null, function(err, hash) {
//         console.log(hash);
//     });
//     database.users.push({
//         id: "125",
//         name: name,
//         email: email,
//         password: password,
//         entries: 0,
//         joined: new Date()
//     })
//     res.json(database.users[database.users.length-1])
// })


// Register 
// app.post("/register", (req, res) => {
//     const { email, name, password } = req.body;
//     db('users')
//     .returning('*')
//     .insert({
//         email: email,
//         name: name,
//         created_at: new Date()
//     })
//     .then(user => {
//         res.json(user[0])
//     })
//     .catch(err => res.status(400).json(`unable to register ${name} and ${email} already exits` ))
    
// })

// Register transaction with longin
app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  
  try {
    const hash = bcrypt.hashSync(password);

    
    db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return trx('users')
          .returning('*')
          .insert({
            email: loginEmail[0].email,
            name: name,
            created_at: new Date()
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => {
      //console.error(err); // Log the error for debugging
      res.status(400).json(`Unable to register there is a user with ${name} and ${email}. Please try again.`);
    });
  } catch (err) {
    //console.error(err); // Log the error for debugging
    res.status(500).json('Internal Server Error');
  }
});


//manuel 
// app.get("/profile/:id", (req, res) => {
//     const { id } = req.params;
//     let found = false;
//     database.users.forEach(user => {
//         if(user.id === id){
//             found = true;
//             return res.json(user);
//         }
//     })
//     if(!found){
//         res.status(400).json("not found");
//     }
// })
// Profile/:userId
app.get("/profile/:id", (req, res) => {
    const { id } = req.params;
   db.select('*').from('users').where({id})
    .then(user => {
         if(user.length){
              res.json(user[0])
        } else {
              res.status(400).json(`Error getting user with id: ${id}`)
        }  
    })
    .catch(err => res.status(400).json(`Error getting user with id: ${id}`))
})

//manuel image
// app.put("/image", (req, res) => {
//     const { id } = req.body;
//     let found = false;
//     database.users.forEach(user => {
//         if(user.id === id){
//             found = true;
//             user.entries++
//             return res.json(user.entries);
//         }
//     })
//     if(!found){
//         res.status(400).json("not found user");
//     }
// })

// Image
app.put("/image", (req, res) => {
    const { id } = req.body;
   db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        if(entries.length){
            res.json(entries[0])
        } else {
            res.status(400).json(`unable to get entries: ${id}`)
        }
    })
    .catch(err => res.status(400).json(`unable to get entries: ${id}`))
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

/**
 * ----> res = hello world
 * signin ----> post = success/fail
 * register ----> post = user
 * profile/:userId ----> get = user
 * image ----> put = user
 */