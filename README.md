## GraphQL 4, NodeJs with Mysql2 Sequelize
GraphQl is most populer API query language. I try to connect with MySQL and GraphQL with NodeJS

![](https://img.shields.io/github/stars/foridpathan/node-graphql-with-mysql.svg) ![](https://img.shields.io/github/forks/foridpathan/node-graphql-with-mysql.svg) ![](https://img.shields.io/github/tag/foridpathan/node-graphql-with-mysql.svg) ![](https://img.shields.io/github/release/foridpathan/node-graphql-with-mysql.svg) ![](https://img.shields.io/github/issues/foridpathan/node-graphql-with-mysql.svg) 


#### Follow the instructions
- Clone Git Repo: `git clone https://github.com/foridpathan/node-graphql-with-mysql.git`
- Open the folder: `cd node-graphql-with-mysql`
- Rename `.env.sample file to .env` and add your database, user and password
- Install all the dependencis `npm i`
- Start server `npm start`

#### Advance Features
> Configured GraphQL-CodeGen CLI. That can generate code from your GraphQL operations and schema

**CodeGen Configuation files**
- YML configure files inside `src/codegen`  folder there is two files
	 - `schema.yml` for generate schemas
	 - `types.yml` for generate types
- Type and Schemas inside this folder `src/graphql` there have two folder
	 - `models/**/type.graphql`  there have requred to this `type.graphql` all subfolders
	 - `schema/**/*..graphql` there have all mutation and querys
- Now run `npm run generate:schema & npm run generate:types`

If there have any issue feel free to contribute or mail [foridpathan45@gmail.com](mailto:foridpathan45@gmail.com "foridpathan45@gmail.com")
