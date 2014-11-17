mocha.setup({ ui: 'bdd', globals: ['script*']});

onload = function(){
  mocha.checkLeaks();
  mocha.globals(['foo']);
  var runner = mocha.run();
};

$(function() {

  var eq = '';
  var res;
  function addCalc(op, num) {
    eq += '(' + num + ')' + op;
  }

  function getScreen() {
    return $('.screen').text();
  }

  $('.keys span').click(function() {

    var type = $(this).data('value') ? 'value' : 'operador';
    var val  = $(this).data(type);

    if(type === 'value') {
      $('.screen').text(getScreen() + '' + val);
    } else if(val === '=') {
      var calc = new Calculadora();
      addCalc('', getScreen());
      res = calc.resolver(eq);
      eq  = '('+res+')';
      $('.screen').text(res);
    } else {
      if($('.screen').text() != '') {
        addCalc(val, getScreen());
        $('.screen').text('');
      }
    }
  });

  $('.clear').click(function() {
    eq = '';
    $('.screen').text('');
  });

});
