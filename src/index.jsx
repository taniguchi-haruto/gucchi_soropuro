import React from "react";
import { createRoot } from "react-dom/client";
import { foodRecipe } from "./food.jsx";
import "./index";

createRoot(document.getElementById("food")).render(<foodRecipe/>);
