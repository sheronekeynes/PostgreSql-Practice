const db = require("../db/queries");

async function getUsernames(req, res) {
  const {search} = req.query;
  let usernames ;
  
  if(search){
    usernames =  await db.getUser(search);
  }else{
    usernames = await db.getAllUsernames();
  }
  res.render('userList',{usernames,search})
}

async function showUser(req, res) {
  await res.render("showUser");
}

async function createUser(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteUsernames(req,res) {

  await db.deleteAllUser();
  res.redirect('/')
  
}

module.exports = {
  getUsernames,
  showUser,
  createUser,
  deleteUsernames
};
