var proData = [
    {
        detail: 'CRISP MONOCHROME',
        img: 'https://cdna.lystit.com/cms/Image_from_i_OS_570_8c4ba5ce61.png'
    },
    {
        detail: 'ONE STEP AHEAD',
        img: 'https://cdna.lystit.com/cms/OSA_24_03_22_09a1fa2732.jpeg'
    },
    {
        detail: 'REFINED GLAMOUR',
        img: 'https://cdna.lystit.com/cms/REFINED_GLAMOUR_c966d97813.jpeg'
    },
    {
        detail: 'NEW CLASSICS',
        img: 'https://cdna.lystit.com/cms/NEW_CLASSICS_f5f19784b9.jpeg'
    },
    {
        detail: '30 UNDER 300',
        img: 'https://cdna.lystit.com/cms/17537008_38224404_800_7b2d22a8aa.png'
    }
];

var proData2 = [
    {
        detail: 'ITALIST: SHOP DESIGNER BRANDS & SAVE UP TO 70%',
        img: 'https://cdna.lystit.com/cms/JPG_SS_22_RTW_TOP_THE_ATTICO_PANTS_DOLCE_and_GABBANA_BAG_PRADA_WOMAN_1_8a2611b9e1.jpg'
    },
    {
        detail: 'DISCOVER THE ICONIC MYEA BAG - EMPORIO ARMANI',
        img: 'https://cdna.lystit.com/cms/EA_My_EA_Bags_HP_Top_Lyst_3ab19a30d3.jpg'
    },
    {
        detail: 'MICHAEL KORS: YOUR FAVORIATE STYLES ARE WAITING AND ON SALE.',
        img: 'https://cdna.lystit.com/cms/LINA_BAG_ASSET_600x600_01800ffbe1.jpg'
    },
    {
        detail: 'THE MULBERRY SOFTIE - A BAG MADE TO BE SQUEEZED',
        img: 'https://cdna.lystit.com/cms/Screenshot_2022_03_08_at_14_40_26_4809776918.png'
    },
    {
        detail: 'ENJOY 30% OFF SELECTED MUST - HAVE PIECES ON 24S',
        img: 'https://cdna.lystit.com/cms/600x600_HP_TOP_LYST_03befce6d4.png'
    }
];


var container = document.querySelector('#container');

var container2 = document.querySelector('#container2');

displayData(proData);
displayData2(proData2);

function displayData(data) {
    data.forEach(function (el) {
        var card = document.createElement('div');

        var box = document.createElement('div');

        var detail = document.createElement('p');
        detail.innerText = el.detail;

        box.append(detail);

        var img = document.createElement('img');
        img.src = el.img;

        card.append(box, img);
        container.append(card);
    })
}

function displayData2(data) {
    data.forEach(function (el) {
        var card = document.createElement('div');

        var box = document.createElement('div');

        var detail = document.createElement('p');
        detail.innerText = el.detail;

        box.append(detail);

        var img = document.createElement('img');
        img.src = el.img;

        card.append(box, img);
        container2.append(card);
    })
}