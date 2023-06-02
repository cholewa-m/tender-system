/*
index Controller
 */
const getIndex = (req,res) => {
    /// SERVICE LAYER
    res.render('index');
}

module.exports = {
    getIndex
}
