
const patientController = {
    index: (req,res) =>{
        res.status(200).json('hello patient')
    },
    put: (req,res) => {
        res.status(201).json('put patient')
    },
    delete: (req,res) => {
        res.status(200).json('delete patient')
    },
    notfound: (req,res) =>{
        // res.render('../views/not-found')
        res.status(404).render('not-found')
    }
}

export default patientController