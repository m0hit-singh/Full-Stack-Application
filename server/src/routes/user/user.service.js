const UserRepository = require("./user.repository");

async function getUserList() {
  const data = await UserRepository.getUserInfo();
  if (data.length > 0) return data;
  else throw "Not Found";
}

module.exports = { getUserList };
