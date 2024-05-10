import { Box, Grid } from "@mui/material";
import MealCard from "./mealCard";
import AddIngredientForm from "./addIngredientForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setIngredients, setRecipes } from "../redux/app.reducer";
import AddRecipeForm from "./addRecipeForm";
import UserTable from "./userTable";
import FaqCard from "./faqCard";
import FaqFunction from "./FaqFunction";


const UserPage = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.app.recipes);

 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        margin: "100px",
      }}
    >
      <div>
        <UserTable />
      </div> 
      <br/>
    <div sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        margin: "100px",
      }}>
    <h1>
      Commonly asked FAQs:
    </h1>
    <div>
      <FaqFunction /> 
    </div>
    </div>
    </Box>
  );
};

export default UserPage;
