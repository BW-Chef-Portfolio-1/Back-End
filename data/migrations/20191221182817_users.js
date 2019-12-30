
exports.up = function (knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id");
        table.string("username", 128)
            .notNullable()
            .unique();
        table.string("password")
            .notNullable();
        table.string("email", 128)
            .notNullable();
        table.string("Location", 128)
            .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("users");
}; 