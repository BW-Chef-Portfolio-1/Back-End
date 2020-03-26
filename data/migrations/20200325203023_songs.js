
exports.up = function(knex) {
    return knex.schema.createTable("songs", table => {
        table.increments("song_id");
        table.string("title")
            .notNullable()
        table.string("artist", 128)
            .notNullable();
        table.float("length");
        table.string("genre");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("songs");
};
