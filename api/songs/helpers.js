const db = require("../../dbconfig");

module.exports = {
  getsongs,
  add,
  getBy,
  getByUserId,
  remove,
  update,
  getById
};

function getsongs() {
  return db("songs");
}

function getByUserId(user_id) {
  return db("users")
  .where("user_id", user_id);
}

function getById(id) {
  return db("songs").where("id", song_id).first();
}

function getBy(filter) {
  return db("songs")
    .where(filter)
    .first();
}

function add(songs) {
  console.log(songs)
  return db("songs")
    .insert(songs)
    .then(ids => {
      getById(ids[0])
      .first()
    });
}

function remove(id) {
  return db("songs")
    .where("song_id", id)
    .del();
}

function update(id, changes) {
  return db("songs")
    .where({ id: id })
    .update(changes)
    .then(count => (count > 0 ? getById(id) : null));
}