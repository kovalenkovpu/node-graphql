import { buildSchema } from "graphql";

const userSchema = buildSchema(`
  type User {
    id: ID
    name: String!
    password: String!
    email: String
    age: Int
  }

  input UserInput {
    name: String!
    password: String!
    email: String
    age: Int
  }

  input UserUpdateInput {
    name: String
    password: String
    email: String
    age: Int
  }

  type Query {
    getUsers: [User]
    getUser(id: ID): User
  }

  type Mutation {
    createUser(data: UserInput): User
    deleteUser(id: ID): User
    updateUser(id: ID, data: UserUpdateInput) : User
  }
`);

export { userSchema };
