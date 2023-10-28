import User from '../models/userModel.js';
import bcrypt from 'bcrypt'
import validator from 'email-validator'
import Validator from 'validatorjs';

const createUser = async (req, res) => {

	const { username, email, password, name, bussinessName, shopNumber, category, shopType } = req.body;

	if (!username && !email && !password && !name && !bussinessName && !shopNumber && !category && !shopType) {
		res. status(500).json({ error: ' Some fields are missing' });
	}

	// den deen
	let validation = new Validator({
		username: username, 
		email: email, 
		password: password, 
		name: name, 
		bussinessName: bussinessName, 
		shopNumber: shopNumber, 
	  }, {
		username: 'required',
		email: 'required|email',
		password:['required' ],
		name: 'required',
		bussinessName: 'required',
		shopNumber: 'required'
	  });

	//   avoid username and email duplicate
	const USERNAME = await User.findOne({ username: username })
	const EMAIL = await User.findOne({ email: email })
	const BUSSINESS_NAME = await User.findOne({ bussinessName: bussinessName })
	const CATEGORY_NAME = await User.findOne({ bussinessName: bussinessName })
	const SHOPTYPE_NAME = await User.findOne({ shopType: shopType })
	const SHOP_NUMBER = await User.findOne({ shopNumber: shopNumber })

	if (USERNAME && USERNAME.username == username) {
		res.status(500).json({ error: ' the username has been taken' });
		return;
	}
	if(!validator.validate(email)){
		res.status(500).json({ error: 'invalid email address' });
		return
	}
	if (EMAIL && EMAIL.email == email) {
		res.status(500).json({ error: ' the email address has been used' });
		return
	}
	if (CATEGORY_NAME && CATEGORY_NAME.category == '') {
		res.status(500).json({ error: 'Select a valid category' });
		return
	}
	if (SHOPTYPE_NAME && SHOPTYPE_NAME.shopType == '') {
		res.status(500).json({ error: 'select a valid shop type' });
		return
	}
	if (SHOP_NUMBER && SHOP_NUMBER.shopNumber == shopNumber) {
		try {
			parseInt(shopNumber)
		} catch (error) {
			res.status(500).json({ error: 'enter a valid shop number' });
		}
		return
	}
	



	const saltRounds = 10
	const salt = await bcrypt.genSalt(saltRounds);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = new User({
		username,
		email,
		password: hashedPassword,
		name,
		bussinessName,
		shopNumber: parseInt(shopNumber),
		shopType

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

const users = async (req, res) => {
	const getUsers = await User.find().select('name email shopNumber shopType')
	res.status(200).json(getUsers)
}

const signUser = async (req, res) => {
	const { email, password } = req.body

	if (!email && !password) {
		res.status(500).json({ error: ' Some fields are missing' })
	}

	await User.find({ email: email }).then((data) => {
		if (data.length > 0) {
			bcrypt.compare(password, data[0].password).then((password) => {
				if (password) {
					res.status(200).json({ message: 'login in successful' })
				}
				else {
					res.status(500).json({ error: ' invalid  password or email' })
				}
			})
		}
		else {
			res.status(500).json({ error: ' The email does not exist' })
		}
	})
}

export { createUser, getCategory, signUser ,users}