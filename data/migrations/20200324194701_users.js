
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("user_id");
        table.string("password")
            .notNullable()
        table.string("email", 128)
            .notNullable();
        table.string("user_picture")
        .defaultTo("https://static9.depositphotos.com/1575949/1203/v/950/depositphotos_12034707-stock-illustration-smiley-icon.jpg");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
