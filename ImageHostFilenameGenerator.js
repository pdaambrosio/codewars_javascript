const { v4: uuidv4 } = require("uuid");

const generateName = () => {
  /**
   * It generates a random name
   * @returns A string of 6 characters
   */
  return uuidv4().slice(0, 6);
};

console.log(generateName());
