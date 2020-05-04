const express = require ('express')
const {MongoClient, ObjectID} = require ('mongodb')
const assert = require('assert')
const app = express()

app.use(express.json())

const mongo_url = 'mongodb://localhost:27017'
const dataBase = 'Contact-List'

MongoClient.connect(mongo_url, { useUnifiedTopology: true }, (err, client) =>{
    assert.equal(err, null, 'database connection failed')
    const db = client.db(dataBase)

//Get Contacts
 app.get('/contacts', (req, res) =>{
        db.collection('contacts').find().toArray((err, data) =>{
            err? res.send('cant fetch products'): res.send(data)
        })
    })
//Get Contact
app.get('/contacts/:id', (req, res) =>{
    let contact = ObjectID(req.params.id) 
    db.collection('contacts').findOne({_id : contact}, (err, data) =>{
        if(err) res.send('cant fetch contact')
        else res.send(data)
    })
})
//Add Contact
app.post('/add_contact', (req, res) =>{
    let newContact = req.body
    db.collection('contacts').insertOne(newContact, (err, data) =>{
        err? res.send('cant add contact'): res.send(data)
    })

})
//Delete Contact    
app.delete('/delete_contact/:id', (req, res) =>{
        let contactToRemove = ObjectID(req.params.id) 
        db.collection('contacts').findOneAndDelete({_id : contactToRemove}, (err, data) =>{
            err? res.send('cant delete contact'): res.send('contact was deleted')
        })
    })

app.put('/edit_contact/:id', (req, res) =>{
    let idContact = ObjectID(req.params.id)
    let modifiedContact = req.body
    db.collection('contacts').findOneAndUpdate({_id : idContact}, {$set: {...modifiedContact}}, (err, data) =>{
        err? res.send('cant fetch'): res.send(data)
    })
})
    
})

const port = process.env.PORT || 5000

app.listen(port, (err) =>{
    err? console.log('server err'): console.log(`server is running on port ${port}`)
})
