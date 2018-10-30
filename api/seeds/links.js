
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        { id: 1,
          long_url: 'www.google.com',
          short_url: 'abc.com',
          users_id: 1
        },
        { id: 2,
          long_url: 'www.theverge.com',
          short_url: 'def.com',
          users_id: 2
        },
        { id: 3,
          long_url: 'www.apple.com',
          short_url: 'ghi.com',
          users_id: 1},
      ]);
    });
};
