function Calculadora() {};

Calculadora.prototype.soma = function(v1, v2) {
  this.v1 = v1 + v2;
  return this;
};

Calculadora.prototype.subtracao = function(v1, v2) {
  this.v1 = v1 - v2;
  return this;
};

Calculadora.prototype.divisao = function(v1, v2) {
  this.v1 = v1 / v2;
  return this;
};

Calculadora.prototype.multiplicacao = function(v1, v2) {
  this.v1 = v1 * v2;
  return this;
};

Calculadora.prototype.resultado = function() {
  return this.v1;
}

Calculadora.prototype.resolver = function(equacao) {
  var formula = /(\(\d+\))([+|*|\/|-])(\(\d+\))/g,
      matches = formula.exec(equacao),
      v1      = parseFloat(matches[1].replace('(', '').replace(')', '')),
      op      = matches[2],
      v2      = parseFloat(matches[3].replace('(', '').replace(')', ''));


  switch(op) {
    case '+':
      return this.soma(v1,v2).resultado();
    case '-':
      return this.subtracao(v1,v2).resultado();
    case '*':
      return this.multiplicacao(v1,v2).resultado();
    case '/':
      return this.divisao(v1,v2).resultado();
  }
};
