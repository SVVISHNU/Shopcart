
import UserModel from '../models/userModels.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// 🔐 Generate Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET,)
}

// ============================
// 🔹 USER REGISTER
// ============================
const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" })
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email format" })
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters" })
    }

    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)

    return res.json({ success: true, token })

  } catch (error) {
    console.log(error)
    return res.json({ success: false, message: error.message })
  }
}

// ============================
// 🔹 USER LOGIN
// ============================
const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body

    if (!email || !password) {
      return res.json({ success: false, message: "Email and password required" })
    }

    const user = await UserModel.findOne({ email })

    if (!user) {
      return res.json({ success: false, message: "Invalid email or password" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid email or password" })
    }

    const token = createToken(user._id)

    return res.json({ success: true, token })

  } catch (error) {
    console.log(error)
    return res.json({ success: false, message: error.message })
  }
}

// ============================
// 🔹 ADMIN LOGIN
// ============================
const adminLogin = async (req, res) => {

  try {

    const { email, password } = req.body
  if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)
    { 
      const token =jwt.sign(email+password,process.env.JWT_SECRET);
      res.json({success:true ,token})

  }else{
    res.json({success:false,message: "Invalid Email or Password"})
  }
   

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// ============================
// 🔹 GET USER PROFILE
// ============================
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body
    const user = await UserModel.findById(userId).select('-password')

    if (!user) {
      return res.json({ success: false, message: "User not found" })
    }

    return res.json({ success: true, user })

  } catch (error) {
    console.log(error)
    return res.json({ success: false, message: error.message })
  }
}

// ============================
// 🔹 UPDATE USER PROFILE
// ============================
const updateProfile = async (req, res) => {
  try {
    const { userId, name, email, phone, address } = req.body

    const updateData = {}
    if (name) updateData.name = name
    if (phone) updateData.phone = phone
    if (address) updateData.address = address
    if (email) {
      if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Invalid email format" })
      }
      updateData.email = email
    }

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, { new: true }).select('-password')

    return res.json({ success: true, message: "Profile updated successfully", user: updatedUser })

  } catch (error) {
    console.log(error)
    return res.json({ success: false, message: error.message })
  }
}

export { registerUser, loginUser, adminLogin, getProfile, updateProfile }