import { MutationResolvers } from "../../generated/typings";
import { Recipe } from "../../mysql/models/index.js";

const mutations: MutationResolvers = {
  Mutation: {
    async addRecipe(_, { fields }) {
      const res = Recipe.create({
        title: fields.title,
        slug: fields.slug,
        instruction: fields.instruction,
        meta: fields.meta,
        author: fields.author,
      });
      return res;
    },
  },
};

export default mutations;
