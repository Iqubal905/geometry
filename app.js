let serial = 0;

// Create function to get input value

function getInputValueById(elementId){
  const getElement = document.getElementById(elementId);
  
  const  getElementValueString = getElement.value;
  const getElementValue = parseFloat(getElementValueString);
  return getElementValue
} 

//  function for create area calculation element

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
 
//  create event handler 
let area 

document.getElementById('triangle-btn').addEventListener('click', function(){
 
    const inputValueA = getInputValueById('triangle-inputA')
    const inputValueB = getInputValueById('triangle-inputB')
    
  if(isNaN(inputValueA) == true || isNaN(inputValueB) == true){
    alert('Please give positive number')
     return false
  }else{
    if(inputValueA <= 0 || inputValueB <= 0){
        alert('Cannot be negetive number or 0')
        return false
          }else{
            serial += 1;
              const calculated =  0.5 * inputValueA  * inputValueB  
            area = calculated.toFixed(2) 
           
    }
   
  } 
  
  createTableElement('Triangle')
   
})


document.getElementById('rectangle-btn').addEventListener('click', function(){
    const inputValueW = getInputValueById('rectangle-inputW')
    const inputValueI = getInputValueById('rectangle-inputI')
    
  if(isNaN(inputValueW) == true || isNaN(inputValueI) == true){
    alert('Please give positive number')
        return false
  }else{
    if(inputValueW <= 0 || inputValueI <= 0){
        alert('Cannot be negetive number or 0')
           return false       
          }else{
            serial += 1;
            const calculated  =  inputValueW  * inputValueI  
            area = calculated.toFixed(2)   
    }
  } 
  
  createTableElement('Rectangle')

})


document.getElementById('parallelogram-btn').addEventListener('click', function(){
  const inputValueB = getInputValueById('parallelogram-inputB')
  const inputValueH = getInputValueById('parallelogram-inputH')
  
if(isNaN(inputValueB) == true || isNaN(inputValueH) == true){
  alert('Please give positive number')
      return false
}else{
  if(inputValueB <= 0 || inputValueH <= 0){
      alert('Cannot be negetive number or 0')
         return false       
        }else{
          
          serial += 1;
          const calculated  =  inputValueB  * inputValueH  
          area = calculated.toFixed(2)
  }
} 

createTableElement('Parallelogram')

})


document.getElementById('rhombos-btn').addEventListener('click', function(){
  const inputValueD1 = getInputValueById('rhombos-inputD1')
  const inputValueD2 = getInputValueById('rhombos-inputD2')
  
if(isNaN(inputValueD1) == true || isNaN(inputValueD2) == true){
  alert('Please give positive number')
      return false
}else{
  if(inputValueD1 <= 0 || inputValueD2 <= 0){
      alert('Cannot be negetive number or 0')
         return false       
        }else{
          
          serial += 1;
          const calculated  =  0.5 * inputValueD1  * inputValueD2  
          area = calculated.toFixed(2)
  }
} 

createTableElement('Rhombus')

})


document.getElementById('pentagon-btn').addEventListener('click', function(){
  const inputValueB = getInputValueById('pentagon-inputB')
  const inputValueA = getInputValueById('pentagon-inputA')
  
if(isNaN(inputValueB) == true || isNaN(inputValueA) == true){
  alert('Please give positive number')
      return false
}else{
  if(inputValueB <= 0 || inputValueA <= 0){
      alert('Cannot be negetive number or 0')
         return false       
        }else{
          
          serial += 1;
          const calculated  = 0.5 * inputValueB  * inputValueA  
          area = calculated.toFixed(2)
  }
} 

createTableElement('Pentagon')

})


document.getElementById('ellipse-btn').addEventListener('click', function(){
  const ellipseA = getInputValueById('ellipse-inputA')
  const ellipseB = getInputValueById('ellipse-inputB')
  
if(isNaN(ellipseA) == true || isNaN(ellipseB) == true){
  alert('Please give positive number')
      return false
}else{
  if(ellipseA <= 0 || ellipseB <= 0){
      alert('Cannot be negetive number or 0')
         return false       
        }else{
          
          serial += 1;
          const calculated  = 3.14 * ellipseA  * ellipseB  
          area = calculated.toFixed(2)
  }
} 

createTableElement('Ellipse')

})


// create function for random color of card

 function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

 return  bgColor;
  }

  // function for get id of card

  function getIdForBgColor(cardId){
   const getIdColor = document.getElementById(cardId);
   return getIdColor 
  }

  // event handler for random color
  
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





