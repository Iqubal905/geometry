
function getInputValueById(elementId){
  const getElement = document.getElementById(elementId);
  
  const  getElementValueString = getElement.value;
  const getElementValue = parseFloat(getElementValueString);
  return getElementValue
} 
function createTableElement(geom){
   
    const container = document.getElementById("table-container");
    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${1}</td>
    <td class="pr-2 pl-1">${geom}</td>
    <td>${area}</td>
    <td><sup>2</sup></td>
    <td><button class="bg-red-300 text-sm ml-2">Convert to m</button>
    `;
    container.appendChild(tr);
}

let area 

document.getElementById('triangle-btn').addEventListener('click', function(){
    const inputValueA = getInputValueById('triangle-inputA')
    const inputValueB = getInputValueById('triangle-inputB')
    
  if(isNaN(inputValueA) == true || isNaN(inputValueB) == true){
    alert('please give positive number')
     return false
  }else{
    if(inputValueA < 0 || inputValueB < 0){
        alert('Cannot be negetive number')
        return false
          }else{
      area =  0.5 * inputValueA  * inputValueB    
    }
  } 
  
  createTableElement('Triangle')
   
})

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const inputValueW = getInputValueById('rectangle-inputW')
    const inputValueI = getInputValueById('rectangle-inputI')
    
  if(isNaN(inputValueW) == true || isNaN(inputValueI) == true){
    alert('please give positive number')
        return false
  }else{
    if(inputValueW < 0 || inputValueI < 0){
        alert('Cannot be negetive number')
           return false       
          }else{
      area =  inputValueW  * inputValueI   
    }
  } 
  
  createTableElement('Rectangle')

})

document.getElementById('rectangle-btn').addEventListener('click', function(){
  const inputValueW = getInputValueById('rectangle-inputW')
  const inputValueI = getInputValueById('rectangle-inputI')
  
if(isNaN(inputValueW) == true || isNaN(inputValueI) == true){
  alert('please give positive number')
      return false
}else{
  if(inputValueW < 0 || inputValueI < 0){
      alert('Cannot be negetive number')
         return false       
        }else{
    area =  inputValueW  * inputValueI   
  }
} 

createTableElement('Rectangle')

})






