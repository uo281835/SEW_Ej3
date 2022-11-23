class Calculadora{

    
    constructor(){
        this.almacenado =0;
        this.actual =0;
        this.seHaHechoUnaOperacion = false;
        document.addEventListener('keydown', (event) => {
            var keyName = event.key;
            var valor = keyName;
            if(valor == 'm')
                this.multiplicar();
            else if(valor == 'd')
                this.dividir();
            else if(valor!="Enter"&&(Number(valor)!==NaN || valor =='+'|| valor =='-'|| valor =='.'))
                this.add(valor);
            else if(valor == "Enter")
                this.evaluar();
            else if(valor == 'p')
                this.porcentaje();
            else if(valor =='c')
                this.reset();
            else if(valor == 'o')
                this.trueReset();
                
          });
    }
    multiplicar(){
        add('*');
    }
    dividir(){
        add('/');
    }
    sumar(){
        add('+');
    }
    restar(){
        add('-');
    }

    add(i){
        if(!this.seHaHechoUnaOperacion){
            this.actual = document.getElementsByName('output')[0].value;
            this.actual+=i;
        }
        else{
            this.actual =i;
            this.seHaHechoUnaOperacion = false;
        }
        
        document.getElementsByName('output')[0].value= this.actual;
        
    }
    add2(i){
        add(i);
        add(i);
    }
    remove(){
        this.actual = document.getElementsByName('output')[0].value;
        this.actual-=i;
        document.getElementsByName('output')[0].value= actual;
    }
    evaluar(){
        this.actual = document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.actual));
        document.getElementsByName('output')[0].value= this.almacenado;
        this.seHaHechoUnaOperacion = true;
    }
    porcentaje(){
        this.actual =  document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.actual))*0.01*Number(this.almacenado);
        document.getElementsByName('output')[0].value= this.almacenado;
        this.seHaHechoUnaOperacion = true;
    }
    raiz(){
        this.actual =  document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.actual)**(1/2));
        document.getElementsByName('output')[0].value= this.almacenado;
        this.seHaHechoUnaOperacion = true;
    }
    reset(){
        this.actual = 0;
        document.getElementsByName('output')[0].value= this.actual;
    }
    trueReset(){
        this.actual = 0;
        document.getElementsByName('output')[0].value= this.actual;
        this.almacenado = 0;
    }
    cambiarSigno(){
        this.actual =  document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.actual));
        if(this.almacenado>0)
            document.getElementsByName('output')[0].value= "-"+this.almacenado;
        else
        document.getElementsByName('output')[0].value= this.almacenado;
        
    }


}

calculadora = new Calculadora();
calculadora.almacenado="";

function add(i){
    calculadora.add(i);
}