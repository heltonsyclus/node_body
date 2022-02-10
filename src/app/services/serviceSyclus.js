const userLicenca = require("../json/userLicenca.json");
const userCrm = require("../json/userCrm.json");

function validaLogin(pUsuario, pSenha, pApp) {
  // console.log(pUsuario, pSenha, pApp);
  let indexUser = null;
  let indexApp = null;

  for (let i = 0; i < userLicenca.length; i++) {
    if (
      userLicenca[i].usuario === pUsuario &&
      userLicenca[i].senha === pSenha
    ) {
      indexUser = i;
      //console.log(i);
      break;
    } else {
      return false; //usuario ou senha invalido
    }
  }
  if (indexUser >= 0) {
    for (let i = 0; i < userCrm.length; i++) {
      if (userCrm[i].acess_token === pApp) {
        indexApp = i;
        break;
      }
    }
  }
  if (indexApp >= 0) {
    return userLicenca[indexUser].aplicativos; //app liberado para o usuario
  } else {
    return false; //app não liberado para o usuario
  }
}

module.exports = validaLogin;
