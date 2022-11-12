import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/config.js";
import { RecipeMetadata, RecipeTypes } from "../../generated/typings.js";

class Recipe extends Model implements RecipeTypes {
  public id!: number;
  public title!: string;
  public slug!: string;
  public instruction!: string;
  public author!: string;
  public meta!: RecipeMetadata;

  // timestamps!
  public readonly createdAt!: string;
  public readonly updatedAt!: string;
  public readonly deletedAt!: string;
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    instruction: {
      type: DataTypes.TEXT,
    },
    meta: {
      type: DataTypes.JSON,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default Recipe;
