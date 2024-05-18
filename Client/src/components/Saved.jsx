import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";

const Saved = () => {
  const { savedRecipe } = useContext(AppContext);
  console.log(savedRecipe);
  return (
    <div>
      <div className="row container mx-auto my-3">
        {savedRecipe?.map((data) => (
          <div className="col-md-3" key={data.recipe}>
            <FetchRecipeById id={data.recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
