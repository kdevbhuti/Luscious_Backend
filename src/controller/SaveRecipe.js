const ResipeModel = require("../database/models/RecepiModel")

const saveRecipe =  async(req, res)=>{
   var {description, recipeName, snapshort, preparationVideo, preparationMethod} = req.body;
   var ingredients = [];

   req.body.ingredients.forEach((element, index)=>{
     ingredients[index] = element.value;
   })
   var recipe = new ResipeModel({
        description: description,   
        ingredients: ingredients,
        recipeName: recipeName,
        snapshort: snapshort,
        preparationMethod: preparationMethod,
        preparationVideo: preparationVideo
  });
  const newRecipe =  await recipe.save();
}

module.exports = {
    saveRecipe: saveRecipe
}