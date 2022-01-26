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

    async updateUser(reqBody){
        let updated = false;
        try {
            const updtedUser = await User.updateOne({_id: reqBody._id}, {$set: reqBody});
            updated = true;
        } catch (error) {
            next(err)
        }
        return updated;
    }

}

module.exports = UsersService;


