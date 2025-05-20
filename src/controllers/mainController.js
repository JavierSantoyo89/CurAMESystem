

const mainController = {
    index: (req,res) =>{
        res.send('hello world')
    },
    notfound: (req,res) =>{
        // res.render('../views/not-found')
        res.render('not-found')
    }
}

export default mainController
// module.exports = mainController;