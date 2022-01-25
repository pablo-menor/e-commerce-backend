const  User = require('../model/users.model');

class UsersService{
    constructor(){}

     async addUser({name, lastName, birthDate, email, password}){
        const newUser = new User({
            name: name,
            lastName: lastName,
            birthDate: birthDate,
            email: email,
            password: password
        });
        await newUser.save();          
    }

    async findUser(userEmail){
        const user = await User.find({email: userEmail});
        return user;
    }

    async checkLogin({email, password}) {
        const user = await User.find({email, password });
        return user;

    }


}

module.exports = UsersService;


