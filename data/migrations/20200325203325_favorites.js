
exports.up = function(knex) {
    return knex.schema.createTable("favorites", tbl => {
  tbl.increments('favorites')
  tbl.integer('song_id')
  .references('song_id')
  .inTable('songs')
  .onUpdate('CASCADE')
  .onDelete('CASCADE')
  tbl.integer('user_id')
  .references('user_id')
  .inTable('users')
  .onUpdate('CASCADE')
  .onDelete('CASCADE')
})
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('favorites')
}
