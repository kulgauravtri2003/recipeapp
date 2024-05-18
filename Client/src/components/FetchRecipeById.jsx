import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App_Context";
import { Link , useLocation} from "react-router-dom";

const FetchRecipeById = ({ id }) => {
  const location = useLocation()
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setrecipe] = useState("");
  
  //   console.log(id )
  useEffect(() => {
    const fetchRecipe = async (id) => {
      const result = await getRecipeById(id);
      //   console.log("recipe by Id ", result);
      setrecipe(result.data.recipe);
    };

    fetchRecipe(id);
  }, [id]);

  return (
    <div className="text-center">
      <div
        className=" text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="d-flex justify-content-center align-items-center p-3">
          <img
            src={recipe.imgurl}
            className="card-img-top"
            alt="..."
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <h3>{recipe.title}</h3>
      </div>
      {location.pathname !== "/saved" && (
        <>
          <div
            className="container "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div className="left">
              <h4>
                {recipe.ing1} - {recipe.qty1}
              </h4>
              <h4>
                {recipe.ing2} - {recipe.qty2}
              </h4>
              <h4>
                {recipe.ing3} - {recipe.qty3}
              </h4>
              <h4>
                {recipe.ing4} - {recipe.qty4}
              </h4>
            </div>
            <div className="right" style={{ maxWidth: "500px" }}>
              {recipe.ist}
            </div>
          </div>
          <Link to={"/"} className="btn btn-warning my-5">
            Back to Home
          </Link>
        </>
      )}
    </div>
  );
};

export default FetchRecipeById;
