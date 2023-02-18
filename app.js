let serial = 0;
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
    <td>${serial}</td>
    <td class="pr-2 pl-1">${geom}</td>
    <td>${area}</td>
    <td><sup>2</sup><span>cm</span></td>
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
            serial += 1;
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




 function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

 return  bgColor;
  }

  function getIdForBgColor(cardId){
   const getIdColor = document.getElementById(cardId);
   return getIdColor 
  }

  getIdForBgColor("triangle-bg").addEventListener("mouseover", function() {
   getIdForBgColor("triangle-bg").style.backgroundColor = random_bg_color();  
});
getIdForBgColor("rectangle-bg").addEventListener("mouseover", function() {
  getIdForBgColor("rectangle-bg").style.backgroundColor = random_bg_color();  
});
getIdForBgColor("parallelogram-bg").addEventListener("mouseover", function() {
  getIdForBgColor("parallelogram-bg").style.backgroundColor = random_bg_color();  
});
getIdForBgColor("rhombus-bg").addEventListener("mouseover", function() {
  getIdForBgColor("rhombus-bg").style.backgroundColor = random_bg_color();  
});
getIdForBgColor("pentagon-bg").addEventListener("mouseover", function() {
  getIdForBgColor("pentagon-bg").style.backgroundColor = random_bg_color();  
});
getIdForBgColor("ellipse-bg").addEventListener("mouseover", function() {
  getIdForBgColor("ellipse-bg").style.backgroundColor = random_bg_color();  
});
getIdForBgColor("cal-bg").addEventListener("mouseover", function() {
  getIdForBgColor("cal-bg").style.backgroundColor = random_bg_color();  
});





