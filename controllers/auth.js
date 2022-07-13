const Token = require('../db/schemas/token')
const bcrypt = require('bcrypt');
const Crypto = require('crypto')
const jwt = require('jsonwebtoken');
const Employee = require('../db/schemas/employee')

const AuthController = {
    AuthenticateUser: async (req,res) => {
        const { id_num, password } = req.body;
        let re = /[a-zA-Z]/;
        let queryType = re.test(id_num)
        try {
            if (queryType) {
                Employee.findOne({first_name: id_num}, async function (err,doc) {
                    // -- Is there an email in our database -- // 
                    if (doc === null) return res.status(500).json({message: `${id_num} was not found.`})
                    // -- Use bcrypt to compare the passwords -- //
                    const matchedPW = await bcrypt.compare(password, doc.password)
                    if (matchedPW === false) return res.status(500).json({message: "Invalid Username or Password"}) 
                    // -- Generate an access token -- //
                    const accessToken = AuthController.generateAccessToken(doc._id)
                    // -- Sign token -- //
                    const refreshToken = jwt.sign({ user: doc._id }, process.env.REFRESH_TOKEN )
                    // -- Save token to database
                    await Token.create({ refreshToken: refreshToken })
            
                    res.send({ accessToken: accessToken, refreshToken: refreshToken, uid: doc._id, name: `${doc.first_name} ${doc.last_name}`, wc_id: doc.wc_id, eid: doc.id_num, did: doc.dept_number })
                })
            } else {
                Employee.findOne({id_num: id_num}, async function (err,doc) {
                    // -- Is there an email in our database -- // 
                    if (doc === null) return res.status(500).json({message: `${id_num} was not found.`})
                    // -- Use bcrypt to compare the passwords -- //
                    const matchedPW = await bcrypt.compare(password, doc.password)
                    if (matchedPW === false) return res.status(500).json({message: "Invalid Username or Password"}) 
                    // -- Generate an access token -- //
                    const accessToken = AuthController.generateAccessToken(doc._id)
                    // -- Sign token -- //
                    const refreshToken = jwt.sign({ user: doc._id }, process.env.REFRESH_TOKEN )
                    // -- Save token to database
                    await Token.create({ refreshToken: refreshToken })
            
                    res.send({ accessToken: accessToken, refreshToken: refreshToken, uid: doc._id, name: `${doc.first_name} ${doc.last_name}`, wc_id: doc.wc_id, eid: doc.id_num, did: doc.dept_number })
                })
            }
        } catch (error) {
            if (error) {
                return res.status(500).json({message: error})
            }
        }
    },
    generateAccessToken: (user) => {
        return jwt.sign({user: user}, process.env.GUARDIAN_TOKEN, { expiresIn: '30m' } )
    } 
}

module.exports = AuthController