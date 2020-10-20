// GENERATE PHONE NUMBER
// nums = [3, 2, 1, 2, 3, 4, 5, 4, 5, 4];
nums = 8885653421;

const generatePhoneNumber = (nums) => {
  if (Array.isArray(nums) === true) {
    nums = nums.join("");
  }
  let string = nums.toString();
  let phone = `${string.slice(0, 3)}-${string.slice(3, 6)}-${string.slice(
    6,
    10
  )}`;
  return phone;
};

console.log(generatePhoneNumber(nums));

module.exports = generatePhoneNumber;
