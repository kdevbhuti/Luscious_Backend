const ResipeModel = require("../database/models/RecepiModel")

const getRecipe = async(req, res) => {
    const recipes = await ResipeModel.find();
    res.json(recipes);
}

const updateComments = (req, res) => {
    const {recipiId, comments} = req.body;
    ResipeModel.findOneAndUpdate({_id: recipiId}, {$set:{comments: comments}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        res.json(doc);
    });
}

module.exports = {
    getRecipe: getRecipe,
    updateComments: updateComments
}