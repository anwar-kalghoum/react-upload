import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress } from "graphql-server-express";
import { apolloUploadExpress } from "apollo-upload-server";
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./schema";
import resolvers from "./resolvers";
require('dotenv').config()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(
  "/graphql",
  bodyParser.json(),
  apolloUploadExpress({ uploadDir: "./temp" }),
  graphqlExpress({ schema })
);

app.listen(4000);
