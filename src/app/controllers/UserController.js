const userLicenca = require("../json/userLicenca.json");
const userCrm = require("../json/userCrm.json");
const validaLogin = require("../services/serviceSyclus");

class UserController {
  //get
  layoutGet(req, res) {
    return res.status(200).json({
      userCrm,
    });
  }
  //post
  loginPost(req, res) {
    const { nome, senha, token } = req.body;
    validaLogin(nome, senha, token);
    //  console.log(validaLogin(nome, senha, token));
  }
  /*loginPost(req, res) {
    let userName = "danilo";
    let userPassword = "0";
    let appKey = "12313131313dsadsadasd561da";
    let idApp = "0";

    if (validaLogin(userName, userPassword, idApp)) {
      return res.status(200).json({});
    } else {
      return res.status(400).json({});
    }
  }*/
}
module.exports = new UserController();
