
const loginController = {
    index: (req,res) =>{
        res.send('hello login')
    },
    notfound: (req,res) =>{
        // res.render('../views/not-found')
        res.render('not-found')
    }
}

export default loginController