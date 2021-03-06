const Validation = require("../Validation");

class Length extends Validation {
  constructor(length) {
    super();

    this.length = length;
  }

  async handle(attribute, value, data) {
    return value.length == this.length;
  }
}

module.exports = Length;
