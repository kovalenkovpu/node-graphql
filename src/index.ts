import express from "express";
import { graphqlHTTP } from "express-graphql";

import { userSchema } from "./schemas/user-schema";
import { userResolvers } from "./resolvers/user-resolvers";

const PORT = process.env.NODE_ENV || 8080;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: userSchema,
    rootValue: userResolvers,
    graphiql: true,
  })
);

app.get("*", (req, res) => {
  res.send("<h1>Hello from server!!!</h1>");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
