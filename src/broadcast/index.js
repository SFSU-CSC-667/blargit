const broadcast = ( io, channel, message ) => {
  io.emit( channel, message )
}

module.exports = broadcast