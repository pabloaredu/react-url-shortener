
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('links', table => {
      table.increments('id').primary()
      table.string('long_url')
      table.string('short_url')
      table.integer('users_id').references('users.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('links')
  ])
};


