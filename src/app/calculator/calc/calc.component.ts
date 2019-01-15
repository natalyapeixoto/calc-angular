import { Component } from "@angular/core";

@Component({
  selector:'ap-calc', 
  templateUrl: './calc.component.html', 
  styleUrls: ['./calc.component.scss'], 
 
})

export class CalcComponent { 
    
    firstNumber: string
    secondNumber: string
    result: string
    
    getValue1(event){
      this.firstNumber = event.target.value
    }
    getValue2(event){
      this.secondNumber = event.target.value
    }

    operations(){
      if(!this.firstNumber || !this.secondNumber){
       return document.querySelector('.calc__validation').innerHTML = 'Por favor, insira dois números acima.'
      }
      document.querySelector('.calc__validation').innerHTML = ''
      const index = document.querySelector('select').selectedIndex
      const operations =  document.querySelectorAll('option')[index].value
      
      switch(operations){
        case '+':
        this.result = this.adding(this.firstNumber, this.secondNumber)
        this.addToHistory(`<li>${parseFloat(this.firstNumber)} + ${parseFloat(this.secondNumber)} = ${this.result}</li>`)
        break

        case '-':
        this.result = this.subtract(this.firstNumber, this.secondNumber)
        this.addToHistory(`<li>${parseFloat(this.firstNumber)} - ${parseFloat(this.secondNumber)} = ${this.result} </li>`)
        break

        case '/':
        this.result =  this.divide(this.firstNumber, this.secondNumber)
        this.addToHistory(`<li>${parseFloat(this.firstNumber)} / ${parseFloat(this.secondNumber)} = ${this.result}</li>`)
        break

        case 'x':
        this.result = this.multiply(this.firstNumber, this.secondNumber)  
        this.addToHistory(`<li>${parseFloat(this.firstNumber)} x ${parseFloat(this.secondNumber)} = ${this.result} </li>`)
        break
       }    
    }

    showHistory(){
     const hist = document.querySelector('.historic__container')
     hist.classList.toggle('historic-show')
     if(hist.classList.contains('historic-show')){
      document.querySelector('.show-historic__title').innerHTML='X' 
      }else{
        document.querySelector('.show-historic__title').innerHTML='Mostrar histórico' 
      }
    }
    
    addToHistory(item){
      const hist = document.querySelector('.historic__list')
      hist.innerHTML+= item
    }

    clearHistoric(){
      const hist = document.querySelector('.historic__list')
      hist.innerHTML =''
    }
    

    adding(firstNumber, secondNumber){
      return (parseInt(firstNumber) + parseInt(secondNumber)).toFixed(2)
    }
    subtract(firstNumber, secondNumber){
      return (parseInt(firstNumber) - parseInt(secondNumber)).toFixed(2)
    }
    divide(firstNumber, secondNumber){
      return (parseInt(firstNumber) / parseInt(secondNumber)).toFixed(2)
    }
    multiply(firstNumber, secondNumber){
      return (parseInt(firstNumber) * parseInt(secondNumber)).toFixed(2)
    }
  }   

