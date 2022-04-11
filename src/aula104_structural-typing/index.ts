type User = { username: string; password: string };
const verifyUser = (user: User, sentValue: User): boolean => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'Ana', password: '123456' };
const sentUser = { username: 'Ana', password: '123456' };
const loggedIn = verifyUser(dbUser, sentUser);
console.log('loggedIn = ', loggedIn);

// versao 3
// type User = { username: string; password: string };
// function verifyUser(user: User, sentValue: User): boolean {
//   return (
//     user.username === sentValue.username && user.password === sentValue.password
//   );
// }

// const dbUser = { username: 'Ana', password: '123456' };
// const sentUser = { username: 'Ana', password: '123456' };
// const loggedIn = verifyUser(dbUser, sentUser);
// console.log('loggedIn = ', loggedIn);

//versao 2
// type User = { username: string; password: string };
// const verifyUser: (user: User, sentValue: User) => boolean = (
//   user,
//   sentValue,
// ) => {
//   return (
//     user.username === sentValue.username && user.password === sentValue.password
//   );
// };

// const dbUser = { username: 'Ana', password: '123456' };
// const sentUser = { username: 'Ana', password: '123456' };
// const loggedIn = verifyUser(dbUser, sentUser);
// console.log('loggedIn = ', loggedIn);

//versao 1
// type VerifyUserFn = (user: User, sentValue: User) => boolean;
// type User = { username: string; password: string };
// const verifyUser: VerifyUserFn = (user, sentValue) => {
//   return (
//     user.username === sentValue.username && user.password === sentValue.password
//   );
// };

// const dbUser = { username: 'Ana', password: '123456' };
// const sentUser = { username: 'Ana', password: '123456' };
// const loggedIn = verifyUser(dbUser, sentUser);
// console.log('loggedIn = ', loggedIn);

export default 1;
