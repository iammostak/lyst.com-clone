var hotData = [
   {
      name: 'Balenciaga Earrings',
      img: 'https://cdna.lystit.com/cms/balenciaga_earrings_28c5ac2ab9.jpeg'
   },
   {
      name: 'Simone Rocha Earrings',
      img: 'https://cdna.lystit.com/cms/simone_rocha_earrings_d997cb6315.jpeg'
   },
   {
      name: 'Camilla Dresses',
      img: 'https://cdna.lystit.com/cms/designer_category_camilla_dresses_ed5dbcc2dc.jpeg'
   },
   {
      name: 'Chanel Shoulder bags',
      img: 'https://cdna.lystit.com/cms/designer_category_chanel_shoulder_bags_969f71f141.jpeg'
   },
   {
      name: 'Fendi Jumpsuits',
      img: 'https://cdna.lystit.com/cms/designer_category_fendi_jumpsuits_9f9ac55f4f.jpeg'
   },
   {
      name: 'Balenciaga Shoulder bags',
      img: 'https://cdna.lystit.com/cms/balenciaga_shoulder_bags_3febdd5725.jpeg'
   }
];

var clothingData = [
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/19eec3dc/fendi-noir-Lycra-Bikini.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/2531d9c3/fendi-noir-Lycra-Swimsuit.jpeg',
      brand: 'Fendi Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/carolazeta/777718a4/dior--Logo-Cotton-Socks.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/carolazeta/04054648/dior-Black-Wool-Silk-Mini-Skirt.jpeg',
      brand: 'Dior Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/eraldo/69c94744/prada-Blue-Plunge-Logo-patch-Crop-Top.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/eraldo/3cef265a/prada-Black-Triangle-Logo-plaque-Cropped-Top.jpeg',
      brand: 'Prada Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/f632d241/louis-vuitton-henne-Monogram-Trenchcoat-mit-Gurtel.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/da9a9e4e/louis-vuitton-rose_beige-LV-Escale-Polokleid.jpeg',
      brand: 'Louis Vuitton Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/net-a-porter/cedef6de/givenchy-black-Robe-Du-Soir-Asymetrique-En-Satin-Et-En-Crepe-A-Decoupes.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/net-a-porter/b94a2a5f/givenchy-Silver-Sequined-Chiffon-Gown.jpeg',
      brand: 'Givenchy Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/frmoda/39af06a2/burberry-Archive-Beige-Bikini-Vintage-Check.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/65d2cef7/burberry-white-T-Shirt-Horseferry-aus-Baumwolle.jpeg',
      brand: 'Burberry Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/vitkac/a5e4423e/saint-laurent-WHITE-Logo-printed-T-shirt.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/7117e7cb/saint-laurent-negro-Vestido-Corto-De-Pelo-Sintetico.jpeg',
      brand: 'Saint Laurent Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/b880c102/balenciaga-white-T-shirt-in-cotone-con-logo.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/3156f47d/balenciaga-black-T-shirt-in-cotone-con-logo.jpeg',
      brand: 'Belenciaga Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/49cd64d6/versace-black-Maillot-de-bain-Greca-asymetrique.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/56d44399/versace-black-Greca-Swimsuit.jpeg',
      brand: 'Versace Clothing'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/8a8a06b2/dolce-gabbana-multicoloured-Printed-Cotton-Bustier-Midi-Dress.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/74d1832b/dolce-gabbana-black-Logo-Stretch-cotton-Crop-Top.jpeg',
      brand: 'Dolce & Gabbana Clothing'
   },
];

var dressesData = [
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/55602e10/fendi-marron-Twill-Dress.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/eraldo/2ade5d82/fendi-Pink-Ff-Logo-embossed-Shift-Dress.jpeg',
      brand: 'Fendi Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/gilt/745b9e0b/dior-Black-A-line-Dress.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/yoox/250c0ff5/dior-White-Short-Dress.jpeg',
      brand: 'Dior Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/eraldo/3435a851/prada-Pink-Satin-Fitted-Dress.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mclabels/911a8bfc/prada-PINK-Cotton-Dress.jpeg',
      brand: 'Prada Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/da9a9e4e/louis-vuitton-rose_beige-LV-Escale-Polokleid.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/d5bfc619/louis-vuitton-noir-Gerade-geschnittenes-Minikleid-in-Monogram-Jacquardgewebe.jpeg',
      brand: 'Louis Vuitton Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/823825a2/givenchy-black-Wool-Cape-Midi-Dress.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/ec12bd7a/givenchy-multicoloured-Printed-Cotton-Dress.jpeg',
      brand: 'Givenchy Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/frmoda/e8c1ee47/burberry-Dark-Birch-Brown-Knee-Length-Dress-Sleeveless.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/frmoda/a6a432ed/burberry-Archive-Beige-Knee-Length-Dress-Sleeveless-Vintage-Check.jpeg',
      brand: 'Burberry Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/7117e7cb/saint-laurent-negro-Vestido-Corto-De-Pelo-Sintetico.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/e1c5f157/saint-laurent-black-Robe-midi-en-laine-a-ornements.jpeg',
      brand: 'Saint Laurent Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/af599374/balenciaga-black-Lace-Corset-Minidress.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/modaoperandi/3df558f3/balenciaga-black-Drama-Crushed-velvet-Bubble-hem-Gown.jpeg',
      brand: 'Balenciaga Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/3d7f076f/versace-blue-Medusa-Latex-Minidress.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/vitkac/2dfa2fb5/versace-BLACK-Dress-With-Logo.jpeg',
      brand: 'Versace Dresses'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/8a8a06b2/dolce-gabbana-multicoloured-Printed-Cotton-Bustier-Midi-Dress.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/9a95b6aa/dolce-gabbana-multicoloured-Floral-Cotton-Midi-Dress.jpeg',
      brand: 'Dolce & Gabbana Dresses'
   }
];

var shoesData = [
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/b0831673/fendi-marron-Satin-Slides.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/82232c72/fendi-noir-Nylon-And-Suede-Low-tops.jpeg',
      brand: 'Fendi Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/ruelala/34ec315d/dior-White-Id-Leather-Sneaker.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/ruelala/15185706/dior-White-D-connect-Leather-Mesh-Sneaker.jpeg',
      brand: 'Dior Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/hbx/2bdb64cc/prada-Black-Brushed-Leather-Loafer.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/eraldo/ede7bde6/prada-Black-Cloudbust-Thunder-Sneakers.jpeg',
      brand: 'Prada Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/7139132d/louis-vuitton-blanc-Lv-Archlight-Sneaker.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/c57e2fcf/louis-vuitton-cognac-Passenger-Sandal.jpeg',
      brand: 'Louis Vuitton Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/cettire/d569102e/givenchy-White-Spectre-Low-Runners-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/e94618af/givenchy-black-Sandalias-G-Cube-85-de-piel.jpeg',
      brand: 'Givenchy Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/ssense/5307e1b8/burberry-ArchiveBeige-Beige-Logo-Check-Larkhall-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/2691fc48/burberry-black-Tb-Leather-Sandals.jpeg',
      brand: 'Burberry Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/164e7d23/saint-laurent-black-Sandalen-Opyum-110-aus-Lackleder.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/ruelala/03471ffc/saint-laurent-9113-Court-Classic-Sl06-Canvas-Leather-Sneaker.jpeg',
      brand: 'Saint Laurent Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/8ba535fc/balenciaga-white-Track-Hike-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/7f10b0da/balenciaga-beige-Baskets-Triple-S.jpeg',
      brand: 'Balenciaga Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/stefaniamode/e71bcea5/versace-pink-Sandali-Medusa-con-ciondolo.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/vitkac/e742fc9d/versace-WHITE-chain-Reaction-Sneakers.jpeg',
      brand: 'Versace Shoes'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/suitnegozi/84f5afa3/dolce-gabbana--Portofino-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/brownsfashion/4a26b0e6/dolce-gabbana-White-Classic-Leather-Low-Top-Sneakers.jpeg',
      brand: 'Dolce & Gabbana Shoes'
   }
];

var sneakersData = [
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/82232c72/fendi-noir-Nylon-And-Suede-Low-tops.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/ssense/1bccb1ad/fendi-FZVBlack-Black-forever-Rockoko-Sneakers.jpeg',
      brand: 'Fendi Sneakers'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/ruelala/34ec315d/dior-White-Id-Leather-Sneaker.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/ruelala/15185706/dior-White-D-connect-Leather-Mesh-Sneaker.jpeg',
      brand: 'Dior Sneakers'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/eraldo/ede7bde6/prada-Black-Cloudbust-Thunder-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/eraldo/aed37781/prada-White-Logo-Plaque-Low-top-Sneakers.jpeg',
      brand: 'Prada Sneakers'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/genteroma/34643dc6/givenchy-White-Black-Logo-Strap-White-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/ssense/df83735e/givenchy--Whitepurple-City-Sport-Sneakers.jpeg',
      brand: 'Givenchy Sneakers'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/ssense/5307e1b8/burberry-ArchiveBeige-Beige-Logo-Check-Larkhall-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/mytheresa/fcf2767f/burberry-white-Sneakers-Salmond-in-pelle-e-tessuto.jpeg',
      brand: 'Burberry Sneakers'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/ruelala/03471ffc/saint-laurent-9113-Court-Classic-Sl06-Canvas-Leather-Sneaker.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/ruelala/1b1d17a5/saint-laurent-9061-Court-Classic-Sl06-Leather-Sneaker.jpeg',
      brand: 'Saint Laurent Sneakers'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/8ba535fc/balenciaga-white-Track-Hike-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/24sevres/de2a28f8/balenciaga-nude-Triple-S-Clear-Sole-Sneaker.jpeg',
      brand: 'Balenciaga Sneakers'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/vitkac/e742fc9d/versace-WHITE-chain-Reaction-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/frmoda/6feced52/versace-BIANCO-Shoes-Trainers-Sneakers-Trigreca.jpeg',
      brand: 'Versace Sneakers'
   },
   {
      imgA: 'https://cdna.lystit.com/128/160/tr/photos/suitnegozi/84f5afa3/dolce-gabbana--Portofino-Sneakers.jpeg',
      imgB: 'https://cdna.lystit.com/128/160/tr/photos/brownsfashion/4a26b0e6/dolce-gabbana-White-Classic-Leather-Low-Top-Sneakers.jpeg',
      brand: 'Dolce & Gabbana Sneakers'
   }
];

var hot = document.querySelector('#hot');

hotData.forEach(function (el) {
   var card = document.createElement('div');

   var nameDiv = document.createElement('div');

   var name = document.createElement('p');
   name.innerText = el.name.toUpperCase();

   nameDiv.append(name);

   var imgDiv = document.createElement('div');

   var img = document.createElement('img');
   img.src = el.img;

   imgDiv.append(img);

   card.append(nameDiv, imgDiv);
   hot.append(card);
})

var clothing = document.querySelector('#clothing');

clothingData.forEach(function (el) {
   var card = document.createElement('div');

   var box = document.createElement('div');

   var boxA = document.createElement('div');

   var imgA = document.createElement('img');
   imgA.src = el.imgA;

   boxA.append(imgA);

   var boxB = document.createElement('div');

   var imgB = document.createElement('img');
   imgB.src = el.imgB;

   boxB.append(imgB);

   box.append(boxA, boxB);

   var brand = document.createElement('p');
   brand.innerText = el.brand;

   card.append(box, brand);
   clothing.append(card);
})

var dresses = document.querySelector('#dresses');

dressesData.forEach(function (el) {
   var card = document.createElement('div');

   var box = document.createElement('div');

   var boxA = document.createElement('div');

   var imgA = document.createElement('img');
   imgA.src = el.imgA;

   boxA.append(imgA);

   var boxB = document.createElement('div');

   var imgB = document.createElement('img');
   imgB.src = el.imgB;

   boxB.append(imgB);

   box.append(boxA, boxB);

   var brand = document.createElement('p');
   brand.innerText = el.brand;

   card.append(box, brand);
   dresses.append(card);
})

var shoes = document.querySelector('#shoes');

shoesData.forEach(function (el) {
   var card = document.createElement('div');

   var box = document.createElement('div');

   var boxA = document.createElement('div');

   var imgA = document.createElement('img');
   imgA.src = el.imgA;

   boxA.append(imgA);

   var boxB = document.createElement('div');

   var imgB = document.createElement('img');
   imgB.src = el.imgB;

   boxB.append(imgB);

   box.append(boxA, boxB);

   var brand = document.createElement('p');
   brand.innerText = el.brand;

   card.append(box, brand);
   shoes.append(card);
})

var sneakers = document.querySelector('#sneakers');

sneakersData.forEach(function (el) {
   var card = document.createElement('div');

   var box = document.createElement('div');

   var boxA = document.createElement('div');

   var imgA = document.createElement('img');
   imgA.src = el.imgA;

   boxA.append(imgA);

   var boxB = document.createElement('div');

   var imgB = document.createElement('img');
   imgB.src = el.imgB;

   boxB.append(imgB);

   box.append(boxA, boxB);

   var brand = document.createElement('p');
   brand.innerText = el.brand;

   card.append(box, brand);
   sneakers.append(card);
})

// Modal function

var modal = document.querySelector('#myModal');
modal.style.display = 'none';

var search = document.querySelector('#search');
var searchBar = document.querySelector('#searchBar');

var span = document.querySelector('#close');

search.onclick = function () {
   if (modal.style.display == 'none') {
      modal.style.display = 'flex';
      searchBar.style.border = '1px solid blueviolet';
      search.placeholder = '';
   } else {
      modal.style.display = 'none';
   }
}

var help = document.querySelector('#help');
var helpDown = document.querySelector('#helpDown');
helpDown.style.display = 'none';

help.onclick = function () {
   if (helpDown.style.display == 'none') helpDown.style.display = 'block';
   else helpDown.style.display = 'none';
}

window.onclick = function (event) {
   if (event.target != search) {
      modal.style.display = 'none'
      searchBar.style.border = '1px solid'
      search.placeholder = 'SEARCH (E.G. "VALENTINO DRESSES")';
   }
   if (event.target != help) helpDown.style.display = 'none';
}