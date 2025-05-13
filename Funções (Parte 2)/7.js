const greet = function(name) {
    return 'Olá, ' + (name);
  };

  const meuObjeto = {
    saudacao: greet
  };
  
  console.log(meuObjeto.saudacao("Matheus"));