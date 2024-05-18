import express from 'express'
import { add, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } from '../controllers/recipe.js';

import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();

// create recipe
router.post('/add',Authenticate, add)

// get all recipe
router.get('/',getAllRecipe)

// get all saved Recipe
router.get('/saved',getSavedRecipe)

// get recipe by Id
router.get('/:id',getRecipeById)

// get recipe by userId
router.get('/user/:id',getRecipeByUserId)

// saved Recipe by Id
router.post("/:id", Authenticate, savedRecipeById);



export default router;