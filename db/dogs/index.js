const db = require( '../connection' )

const FIND_BY_OWNER = `
  SELECT * FROM dogs WHERE user_id=$1
`

module.exports = {
  findByOwner: id => db.any( FIND_BY_OWNER, id )
}