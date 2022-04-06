
export function getUser(usersJson: Array<any>, userName: string, password: string) {
    return usersJson.find(user => user.userName === userName && user.password === password)
}