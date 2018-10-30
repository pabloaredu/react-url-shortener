const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(connection)
Model.knex(knexConnection)

class Link extends Model {
  static get tableName () {
    return 'links'
  }
  static get relationMappings () {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'links.users_id',
          to: 'users.id'
        }
      }
    }
  }
}

class User extends Model {
  static get tableName () {
    return 'users'
  }
  static get relationMappings () {
    return {
      links: {
        relation: Model.HasManyRelation,
        modelClass: Link,
        join: {
          from: 'users.id',
          to: 'links.users_id'
        }
      }
    }
  }
}

module.exports = { Link, User }