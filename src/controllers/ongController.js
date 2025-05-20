
const ongController = {
    index: (req,res) =>{
        // res.json({'hello Ong'})
        // res.send('hello Ong')
        res.send('hello Ong')
    },
    notfound: (req,res) =>{
        // res.render('../views/not-found')
        res.render('not-found')
    }
}

export default ongController