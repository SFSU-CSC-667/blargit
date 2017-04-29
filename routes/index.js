const express = require('express')
const router = express.Router()

const { User } = require( '../db' )

router.get( '/', ( request, response ) => {
  User.all()
    .then( users => {
      response.render( 'index', { users })
    })
})

router.post( '/test', ( request, response ) => {

})

module.exports = router
