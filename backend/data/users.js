import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Sandy Dasari',
        email:'sandy@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Swetha',
        email:'swetha@example.com',
        password: bcrypt.hashSync('123456', 10),
    }

]

export default users