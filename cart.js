var cont = document.querySelector('#lef');
var total = document.querySelector('#total');
var tItem = document.querySelector('#tItem');
var promo = document.querySelector('#promo');
var form = document.querySelector('#apply');
var checkout = document.querySelector('#dd');

var cartLS=JSON.parse(localStorage.getItem("masaiCart")) || [];

var sum = 0;
var n = cartLS.length;
var c = 0;

displayDate(cartLS);

function displayDate(data) {
   data.forEach(function(el, index) {
      var count = 1;

      var candy = document.createElement('div');
      candy.id = 'candy'

      var imgDiv = document.createElement('div');
      var about = document.createElement('div');
      about.id = 'about';

      var img = document.createElement('img');
      img.id = 'pic';
      img.src = el.img;
      imgDiv.append(img);

      var brand = document.createElement('p');
      brand.innerText = el.name;

      var des = document.createElement('p');
      des.innerText = el.des;

      var price = document.createElement('p');
      price.innerText = 'INR '+ el.price;
      sum += +(el.price);

      var category = document.createElement('p');
      category.innerText = el.category;

      about.append(brand, des, price, category);

      var remove = document.createElement('button');
      remove.innerText = 'REMOVE';
      remove.id = 'remove';
      remove.addEventListener('click', function() {
         event.target.parentNode.remove();
         data.splice(index, 1);
         sum -= +(el.price);
         localStorage.setItem('masaiCart', JSON.stringify(cartLS));
         window.location.reload();
      })
      
      var inc = document.createElement('button');
      inc.innerText = '+';
      inc.id = 'inc';
      inc.addEventListener('click', function() {
         n++;
         count++;
         sum += +(el.price);
         tItem.innerText = n;
         qty.innerText = count;
         total.innerText = sum;
      })

      var qty = document.createElement('div');
      qty.innerText = count;
      qty.id = 'count'

      var dec = document.createElement('button');
      dec.innerText = '-';
      dec.id = 'dec';
      dec.addEventListener('click', function() {
         if(count>1) {
            n--;
            count--;
            sum -= +(el.price);
            tItem.innerText = n;
            qty.innerText = count;
            total.innerText = sum;
         }
      })


      total.innerText = sum;
      tItem.innerText = n;

      candy.append(imgDiv, about, inc, qty, dec, remove);
      cont.append(candy);
   })
}

form.addEventListener('submit', function(event) {
   event.preventDefault();
   c++;
   if(promo.value == 'masai30' && c == 1) {
      sum *= 0.3;
      total.innerText = sum;
   }
})

dd.onclick = function() {
   window.location.href = 'payment.html'
}