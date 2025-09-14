const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames:", usernames);
  res.send("usernames:" + usernames.map((user) => user.username).join(", "));
}

async function showUser(req, res) {
  await res.render("showUser");
}

async function createUser(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  showUser,
  createUser,
};
