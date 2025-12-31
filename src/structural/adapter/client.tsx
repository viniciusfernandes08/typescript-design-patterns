import { EmailValidatorAdapter } from "./validations/email-validator-adapter";
import { emailValidatorAdapter } from "./validations/email-validator-adapter-fn";
import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validations/email-validator-protocol";

function validateEmail(emailValidator: EmailValidatorProtocol, email: string) {
  if (emailValidator.isEmail(email)) {
    console.log('E-mail válido')
  } else {
    console.log('E-mail inválido')
  }
}

function validaEmail(emailValidator: EmailValidatorFnProtocol, email: string) {
  if (emailValidator(email)) {
    console.log('E-mail válido')
  } else {
    console.log('E-mail inválido')
  }
}

const email = 'email123@email.com'
validateEmail(new EmailValidatorAdapter(), email)
validaEmail(emailValidatorAdapter, email)
