exports.up = function (knex) {
  return knex.schema.createTable("contacts", (table) => {
    table.increments("id").primary();
    table.string("name").unique();
    table.string("email").unique();
    table.string("phone");
    table.integer("category_id");
    table.foreign("category_id").references("categories.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contacts");
};
