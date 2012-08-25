#!node

var mecha = function(){ run.apply(this, arguments) }, run = function(){}

mecha.log = function(){ console.log.apply(console, arguments) }
mecha.example = (typeof describe === 'undefined' && process.argv[1])

if( mecha.example ) {
  var Mocha = require('mocha')
    , mocha = new Mocha
  if( __filename === mecha.example ) {
    mocha.files = process.argv.slice(2)
    mocha.run(process.exit)
  } else {
    mocha.suite.emit('pre-require', global, mecha.example, mocha)
    run = function(){
      var suite = mocha.suite
      Mocha.apply(mocha, arguments)
      mocha.suite = suite
      if(arguments.length == 0) {
        mocha._reporter = function(){}
      }
      mocha.run()
    }
  }
} else {
  mecha.log = function(){}
}

module.exports = mecha
