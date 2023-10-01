import User from '../models/userModel.js';
import bcrypt from 'bcrypt'

const createUser = async (req, res) => {

	const { username, email, password, name, bussinessName, shopNumber, category } = req.body;

	if (!username && !email && !password && !name && !bussinessName && !shopNumber && !category) {
		res.status(500).json({ error: 'Internal server error: Some fields are missing' });
	}

	//   avoid username and email duplicate
	const USERNAME = await User.findOne({ username: username })
	const EMAIL = await User.findOne({ email: email })
	const BUSSINESS_NAME = await User.findOne({ bussinessName: bussinessName })

	if (USERNAME && USERNAME.username == username) {
		res.status(500).json({ error: 'Internal server error: the username has been taken' });
		return;
	} else {
		if (EMAIL && EMAIL.email == email) {
			res.status(500).json({ error: 'Internal server error: the email address has been used' });
			return
		} else {
			if (BUSSINESS_NAME && BUSSINESS_NAME.bussinessName == bussinessName) {
				res.status(500).json({ error: 'Internal server error: the bussiness name has been used' });
				return
			}
			else {


				const saltRounds = 10
				const hashedPassword = await bcrypt.hash(password, saltRounds)

				const user = new User({
					username,
					email,
					password: hashedPassword,
					name,
					bussinessName,
					shopNumber,
					category
				});

				if (user) {
					await user.save();
					res.status(201).json({
						message: 'User created successfully',
						data: {
							username: username,
							email: email
						}
					});
				}
				else {
					res.status(400).json({ error: 'Error creating user' });
				}


			}
		}
	}


};


const getCategory = async (req, res) => {
	res.status(200).json({
		category: [
			'games',
			'phones',
			'pc store',
			'fashion',
			'resturant',
			'other',
		]
	})
}

const signUser = async (req, res) => {
	const { email, password } = req.body

	if (!email && !password) {
		res.status(500).json({ error: 'Internal server error: Some fields are missing' })
	}

	await User.find({ email: email }).then((data) => {
		if (data.length > 0) {
			bcrypt.compare(password, data[0].password).then((password) => {
				if (password) {
					res.status(200).json({ message: 'login in successful' })
				}
				else {
					res.status(500).json({ error: 'Internal server error: invalid  password or email' })
				}
			})
		}
		else {
			res.status(500).json({ error: 'Internal server error: The email does not exist' })
		}
	})
}

export { createUser, getCategory, signUser }