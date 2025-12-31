export interface EmailValidatorProtocol {
  isEmail(email: string): boolean;
}

export interface EmailValidatorFnProtocol {
  (email: string): boolean;
}
