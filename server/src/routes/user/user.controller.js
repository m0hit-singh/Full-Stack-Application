const router = require("express").Router();
const UserService = require("./user.service");

router.get("/list", getUserList);
async function getUserList(req, res) {
  await UserService.getUserList()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(401).send(error));
}
module.exports = router;
