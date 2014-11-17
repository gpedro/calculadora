(function(){
  var calc = new Calculadora();
  describe('Calculadora', function () {
    it('soma de dois números inteiros positivos', function () {
      Should(calc.resolver('(1)+(1)')).be.exactly(2);
    });

    it('subtração de dois número inteiros', function () {
      Should(calc.resolver('(1)-(1)')).be.exactly(0);
    });

    it('multiplicação de dois número inteiros', function () {
      Should(calc.resolver('(2)*(8)')).be.exactly(16);
    });

    it('divisão de dois número inteiros', function () {
      Should(calc.resolver('(2)/(10)')).be.exactly(0.2);
    });
  });
})();
