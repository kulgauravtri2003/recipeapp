import mongoose, { modelNames } from "mongoose";

const savedRecipeSchema = new mongoose.Schema({
    recipe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'recipe',
    }
})

export const SavedRecipe = mongoose.model("SavedRecipe",savedRecipeSchema)