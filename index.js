import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql", //type의 정의
  resolvers, // = resolvers: resolbers
});

server.start(() => console.log("Graphql Server Running"));
