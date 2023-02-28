const CA = require("../modals/CAModal")

const addCa = async (req, res) => {
    try {
        let status = false;
        let ca = await CA.findOne({ email: req.body.email });
        if (ca) {
             return res.status(400).send({ error: "Sorry, a user with this email already exists!!", status: false });
        }
        ca = await CA.create(
            {
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                year: req.body.year,
                how: req.body.how,
                code: req.body.code,
                city: req.body.city,
                college: req.body.college,
                     
            }
        );

        return res.status(200).send("hogaya")
        
    }
    catch (err) {
        let status = false;
        console.log(err)
        return res.status(500).send("nah")
    }
}

const checkCode = async (req, res) => {
    try {
      let num = req.body.num
    let code = await CA.findOne({ code: num});
    if (code) {
        return res.status(200).send({
            find : false
      });
    } else {
      return res.status(200).send({find: true});
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {addCa, checkCode}