const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

const { ApolloServer } = require("apollo-server-express");
const {
  graphqlUploadExpress, // The Express middleware.
} = require("graphql-upload");

const db = require("./config/connection");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true}))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  context: authMiddleware,
});
app.use(graphqlUploadExpress());
server.applyMiddleware({ app });



// Serve up static images
app.use(express.static(path.join(__dirname, "./images")));

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
  app.use(express.static(path.join(__dirname, "../finalpv1/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../finalpv1/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
