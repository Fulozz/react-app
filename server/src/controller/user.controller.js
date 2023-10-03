const User = require('../models/User.model')

const jwt = require('jsonwebtoken')


exports.registerNewUser = async (req, res) => {
    try {
        let isUser = await User.find({ name: req.body.name });

        if (isUser.length >= 1) {
            return res.status(409).json({ message: 'Sorry! This name is already registered!' });
        }
        const newUser = new User(req.body);
        const user = await newUser.save();
        const token = await newUser.generateAuthToken();
        return res.status(201).json({ message: 'User created successfully!', user, token })
    } catch (error) {
        res.status(400).json({ error: error })
    }
};


exports.loginUser = async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;
        const user = await User.findByCredentials(name, password);

        if (user) {
        const token = await user.generateAuthToken()

        return res.status(200).send({
            message: ' Usuario(a) logado com sucesso!',
            user,
            token,
        })
        }
        

    } catch (err) {
        return res.status(401).send({
            message: 'Erro ao realizar o login, verifique suas credenciais'
        })

    }

};

// ==> Método responsável por retornar um determinado 'User'
exports.returnUserProfile = async (req, res) => {
    await res.json(req.userData);
};


exports.validateUser = async (req, res) => {
    const json = req.body.token
    try {
        const jsonP = JSON.parse(json)
        const token = (jsonP.token)
        const decoded = jwt.decode(token, 'secret')
        console.log(decoded);
        if (decoded !== undefined) {

            console.log('passou aqui');
            return res.status(201).send({
                status: true
            });
        }
    } catch (err) {
        console.log(err, 'erro!!!!!');
        return res.status(401).send({
            status: false,
        });
    }
}