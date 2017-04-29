const db = require( '../connection' )

const FIND = `
  SELECT * FROM users WHERE id=$1
`

module.exports = {
  find: id => db.oneOrNone( FIND, id )
}