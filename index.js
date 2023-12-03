class heroi{
  
    constructor(nome,nivel, tipo){
      this.nome = nome;
      this.nivel = nivel;
      this.tipo = tipo;
      }
      
    atacar() {
    
    let ataque ="";
    
       switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        
          } 
          
           console.log(`O  heroi de classe ${this.tipo} atacou usando ${ataque}.`)
    }
  }
  
  let meuheroi= new heroi ( "joca",30 ,"ninja");
  meuheroi.atacar();
   let seuHeroi = new heroi ("você",30 ,"monge")
  seuHeroi.atacar();