let frase = 'AGENDA CULTURAL';
      let h1 = document.querySelector('h1');
      let contador = 0;
      function exibirLetra(){
        let letra = frase[contador];
        h1.innerHTML += letra;
        contador++;
        if(contador >= frase.length){
          clearInterval(intervalo);

        }
      }
      let intervalo = setInterval(exibirLetra, 230);

 $('.carousel').carousel({
  interval: 3000
})