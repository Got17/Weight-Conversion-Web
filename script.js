
let unitConversions = {
    pikogram: 1e15,
    nanogram: 1e12,
    mikrogram: 1e9,
    milligram: 1e6,
    dekagram: 1e2,
    gram: 1000,
    kilogram: 1,
    quintal: 1e-2,
    tons: 1e-3,
    font: 1e-3, 
    ounce: 35.274, 
    karat: 5000 
  };
  
  function convertUnits() {
    let inputValue = parseFloat(document.getElementById('unit-input').value);
    let fromUnit = document.getElementById('unit-from').value;
    let toUnit = document.getElementById('unit-to').value;
  
    let result = inputValue * (unitConversions[fromUnit] / unitConversions[toUnit]);
  
    document.getElementById('conversion-result').value = result;
  }
  
  document.getElementById('unit-from').addEventListener('change', convertUnits);
  document.getElementById('unit-to').addEventListener('change', convertUnits);
  document.getElementById('unit-input').addEventListener('input', convertUnits);
  
  // window.addEventListener('load', convertUnits);
  