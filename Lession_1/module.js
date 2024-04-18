// Create module functions and export them

/**
 * Local Module : getName
 * @returns {string} "Supriyo Das"
 */
const getName = () => {
  return "Supriyo Das";
};

/**
 * Local Module : getAge
 * @returns {number} 36
 */
const getAge = () => {
  return 36;
};

/**
 * @param {string} address "My address"
 */
const address =
  "Keota Kundubagan, Onkarnth Lane, Sahaganj, Hooghly, West Bengal = 712104.";

// Export modules to index.js method 1: (commented)
// exports.getName = getName;
// exports.getAge = getAge;
// exports.address = address;

// Export modules to index.js method 2:
module.exports = {
  getName,
  getAge,
  address,
};
