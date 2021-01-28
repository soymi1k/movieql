import { people } from "./db";

const resolvers = {
  Query: {
    people: () => people, //= people: function(){ return people }
  },
};

export default resolvers;
