/*function run() {
      let nachte = Number(document.querySelector('#nachte').value);
      let gaste = Number(document.querySelector('#gaste').value);
      let fruhstuck = document.querySelector('#fruhstuck').checked;
      let preis = 0;

      if (gaste == 1) {
            preis = nachte * 50;
      }
      else {
            preis = nachte * 50 + nachte * (gaste - 1) * 10;
      }

      if (fruhstuck == true) {
            preis = preis + nachte * gaste * 8;
      }
      

      document.querySelector('#placeholder').innerHTML = `Du bezahlst nur ${preis}€`;
}*/

let preis = 0;
function run() {
      let ankunft = new Date(document.querySelector('#ankunft').value);
      let abreise = new Date(document.querySelector('#abreise').value);
      const oneDay = 24 * 60 * 60 * 1000;
      const nachte = Math.round(Math.abs((ankunft - abreise) / oneDay));
      //let nachte = Number(document.querySelector('#nachte').value);
console.log(Number(ankunft));
      let gaste = Number(document.querySelector('#gaste').value);
      let fruhstuck = document.querySelector('#fruhstuck').checked;
      
      calc(nachte, gaste, fruhstuck);
      document.querySelector('#placeholder').innerHTML = `Du bezahlst nur ${preis}€`;
      
}

function calc(x, y, z) {
      if (y == 1) {
            preis = x * 50;
      }
      else {
            preis = x * 50 + x * (y - 1) * 10;
      }

      if (z == true) {
            preis = preis + x * y * 8;
      }
      return preis;
}