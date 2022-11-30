const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')


const convert=(elem,elem2,elem3)=>{
    
    
    elem.addEventListener('input',()=>{
        
            fetch('data.json').then((resp)=>{
                return resp.json()
            }).then((resp)=>{
        
            switch (elem){
                case som:

                    elem2.value=( elem.value/resp.usd).toFixed(2)
                    elem3.value = (elem.value/resp.euro).toFixed(2)
                    break;
                case usd:
                    elem2.value=(elem.value*resp.usd).toFixed(2)
                    elem3.value =((elem.value*resp.usd)/resp.euro).toFixed(2)
                    break;
                case euro:
                    elem2.value = (elem.value*resp.euro).toFixed(2)
                    elem3.value = ((elem.value*resp.euro)/resp.usd).toFixed(2)
                    break;
            }
            if(elem.value===''){
                elem2.value = ''
                elem3.value =''
            }
        })
        
    })
}
convert(som,usd,euro)


convert(usd,som,euro)


convert(euro,som,usd)