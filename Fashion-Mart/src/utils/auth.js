export const doesUserExists = (users, curUser) => {
    return users.find((user) => curUser.email === user.email);
}