#!node

var mecha = module.exports = exports = {
  log: function(){ console.log.apply(console, arguments) },
  example: (typeof describe === 'undefined' && process.argv[1]),
  run: function(){}
}

if( mecha.example ) {
  var mocha = new (require('mocha'))
  if( __filename === mecha.example ) {
    mocha.files = process.argv.slice(2)
    mocha.run(process.exit)
  } else {
    mocha.suite.emit('pre-require', global, mecha.example, mocha)
    mecha.run = function(){ mocha.run.apply(mocha, arguments) }
  }
} else {
  mecha.log = function(){}
}


module.exports = mecha
