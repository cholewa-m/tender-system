/*
index Controller
 */
const getIndex = (req,res) => {
    /// SERVICE LAYER
    res.render('index', { title: 'Express' });
}

module.exports = {
    getIndex
}
