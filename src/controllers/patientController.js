
const patientController = {
    index: (req,res) =>{
        res.json('hello patient')
    },
    notfound: (req,res) =>{
        // res.render('../views/not-found')
        res.render('not-found')
    }
}

export default patientController