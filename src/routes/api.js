const mongojs = require('mongojs')
const db = mongojs('apiMovies09-01-22', ['movies'])

module.exports = app =>{
    app.get('/api',(req,res)=>{
        db.movies.find((err,movies)=>{
            res.json({
                movies
            })
            
        })
    })

    app.post('/api',(req,res)=>{
        db.movies.save(req.body)
        res.json({"message":"creado y guardado en bd"})
    })
    app.delete('/api/:id',(req,res)=>{
        db.movies.remove(
            {_id:mongojs.ObjectId(req.params.id)},
            (err,response)=>{
                console.log(response,":del")
            }
        )
        res.json({"message":"document deleted successfully"})
    })
    app.put('/api/:id',(req,res)=>{
        const id = req.params.id
        db.movies.update(
            {_id:mongojs.ObjectId(id)},
            {$set:req.body},
            {},
            (err,response)=>{
                console.log(response,":sax")
            })
        res.json({"message":"document updated successfully"})
    })
}