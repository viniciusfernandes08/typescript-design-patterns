// Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leafs
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

// Composite
export class ValidationComposite extends ValidationComponent {
  private children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const isValid = child.validate(value);
      if (!isValid) return false;
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

//Client
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail, validateNumber);
console.log(validationComposite.validate('otavio123@email.com'));
