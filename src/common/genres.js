import { exportDefaultDeclaration } from "@babel/types";
import { compileFunction } from "vm";

// here we store the list of genres, where any new genre to be added , should be added here
let genres = [
    {
        id: 1,
        name: "Action"
    },
    {
        id: 2,
        name: "Sci-Fi"
    },
    {
        id: 3,
        name: "Drama"
    }
]

export default genres;

//note: any thing can be exportDefaultDeclaration(class/functional component, variable.etc)