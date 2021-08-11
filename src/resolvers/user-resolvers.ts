interface User {
  id: string;
  name: string;
  password: string;
  email?: string;
  age?: number;
}

interface UserDTO extends Omit<User, "id"> {}

let users: User[] = [
  {
    id: String(Date.now()),
    name: "John",
    password: "pass1",
    email: "john@gmail.com",
    age: 30,
  },
  {
    id: String(Date.now() + 1),
    name: "Mike",
    password: "pass2",
    email: "mike@gmail.com",
    age: 35,
  },
];

const userResolvers = {
  getUsers: () => {
    return users;
  },
  getUser: ({ id }: { id: User["id"] }) => {
    return users.find((user) => user.id === id);
  },
  createUser: ({ data }: { data: UserDTO }) => {
    const user: User = { id: String(Date.now()), ...data };

    users.push(user);

    return user;
  },
  deleteUser: ({ id }: User) => {
    const user = users.find((user) => user.id === id);

    users = users.filter((user) => user.id !== id);

    return user;
  },
  updateUser: ({ id, data }: { id: User["id"]; data: UserDTO }) => {
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      const user: User = { ...users[userIndex], ...data };

      users[userIndex] = user;

      return user;
    }

    return `User with id ${id} not found`;
  },
};

export { userResolvers };
