const ax2Page = document.getElementById('ax2');
const bxPage = document.getElementById('bx');
const cPage = document.getElementById('c');
const answer = document.getElementById('answer')

const filedData = (a, b, c) => { 

    if (a.length === 0 || b.length === 0 || c.length === 0 )  return false // Se algum Dos campos não estiver preenchido será retornado false
     
    else   return true  
    
}

function bhaskara() {

    if (filedData(ax2Page.value, bxPage.value, cPage.value)) { // Verificando se todos os campos estão preenchidos
    const a = Number(ax2Page.value)
    const b = Number(bxPage.value)
    const c = Number(cPage.value)
    

    const bSquare = b ** 2 
    const aTimesC = a * c
    const times4 = 4 * aTimesC
    const delta = bSquare - times4

    const deltaTheSquare = Math.sqrt(delta)
    const calculatingA = 2 * a

    const xLineAccount = -b +  deltaTheSquare 
    const xLineResult = xLineAccount / calculatingA

    const xTwoLineAccont = -b - deltaTheSquare
    const xTwoLineResult = xTwoLineAccont / calculatingA

    if (deltaTheSquare) { // Se  a raiz quadrada conseguir ser fatorada ela é positiva, então o calculo será feito.
    document.getElementById('page-center').style.height ='90vh' // Como é gerado html no script quando clicar no botão o calculo iria sair pra 
                                                                // fora da caixa laranja, com isso quando apertar o botão a div irá aumentar


    // Aqui eu gero a div space pra dar um espaço em algumas partes do calculo.
    //  E aqui eu também gero a div line, pra traçar uma linha ni calculo da bhaskara em si

    answer.innerHTML = `Δ = (b)² -4 * a * c <br>
                        Δ = (${b})² -4 * ${a} * ${c} <br>
                        Δ = ${bSquare} - 4 * ${aTimesC} <br>
                        Δ = ${bSquare} - ${times4} <br>
                        Δ = ${delta} <br>
                        <br>
                        x' = -(${b}) +√${delta}  = <div id="space"></div> ${xLineAccount} =  <div id= "space"></div> ${xLineResult.toFixed(3).replace('.' , ',')}
                        <div id="line"> </div>
                        2 * ${a}   = <div id= "space"> </div> ${calculatingA}
                        <br>
                        <br>
                        x'' = (-${b}) - √${delta} = <div id="space"></div> ${xTwoLineAccont} = <div id="space"></div> ${xTwoLineResult.toFixed(3).replace('.' , ',')}
                        <div id="line"></div>
                        2 * ${a} = <div id="space"></div> ${calculatingA}
    `
    } else {
        answer.innerHTML = 'Delta negativo'
        document.getElementById('page-center').style.height = '35.5vh'
    }

    } else {
        alert('[ERRO] Preencha os valores para continuar')
    }
 


    // Limpando as caixinhas
    ax2Page.value = ''
    bxPage.value = ''
    cPage.value = ''
 
    
}





























//     Δ = b(${b})² -4 * a * c <br>
//     Δ = ${bSquare} -4 * ${aTimesC} <br>
//     Δ = ${bSquare} - ${times4} <br>
//     Δ = ${delta}<br>
//     <br> 

//     x' = -(${b}) + &${theSquare} = ---${xLineAccount} = --- ${xLineResult.toFixed(3).replace('.' , ',')}<br> 
//     <div id = "line"> </div>
//     <div id = "line-bottom">  2 * ${a}= ---${calculatingA} </div> </br>            
//    <br>

//    x'' = -(${b}) - &${theSquare} = ---${xTwoLineAccount} = --- ${xTwoLineResult.toFixed(3).replace('.' , ',')}<br> 
//    <div id = "line"> </div>
//    <div id = "line-bottom">  2 * ${a}= ---${calculatingA} </div> </br>
 
    