const db = require( '../connection' )

const ALL = `SELECT * FROM users`
const FIND = `SELECT * FROM users WHERE id=$1`

module.exports = {
  all: () => db.any( ALL ),
  find: id => db.oneOrNone( FIND, id )
}