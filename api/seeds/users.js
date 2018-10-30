
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          username: 'user_1',
          password: 'password_1'
        },
        { id: 2,
          username: 'user_2',
          password: 'password_2'
        },
        { id: 3,
          username: 'user_3',
          password: 'password_3'
        }
      ]);
    });
};
