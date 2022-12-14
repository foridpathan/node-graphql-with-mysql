import { QueryResolvers } from "../../generated/typings";
import { Recipe } from "../../mysql/models/index.js";

const queries: QueryResolvers = {
  Query: {
    getRecipes: async () => {
      const res = await Recipe.findAll();
      return res;
    },
  },
};

export default queries;
