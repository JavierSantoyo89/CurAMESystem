
const stadisticController = {
    index: (req,res) =>{
        res.send('hello Stadistic')
    },
    notfound: (req,res) =>{
        // res.render('../views/not-found')
        res.render('not-found')
    }
}

export default stadisticController