
var imgLarge = $('.img-large');
var img = ["url(./images/cars/car-1.jpg)",
            "url(./images/cars/car-2.jpg)",
            "url(./images/cars/car-3.jpg)",
            "url(./images/cars/car-4.jpg)",
            "url(./images/cars/car-5.jpg)",
            "url(./images/cars/car-6.jpg)",
            "url(./images/cars/car-7.jpg)",
            "url(./images/cars/car-8.jpg)",
            "url(./images/cars/car-9.jpg)"]
var nav = $('.navbar');
var imgArea = $('.img-area');

var bookForm = $('.book-form');
var bookContent = $('.book-content');

// function for image change
function check(z){
    switch(z){
        case 'img1':
            imgLarge.css('background-image',img[0]);
            imgArea.css('background-image',img[0]);
            imgLarge.css('animation','fadeInRight  .6s');
            break;
        case 'img2':
            imgLarge.css('background-image',img[1]);
            imgArea.css('background-image',img[1]);
            imgLarge.css('animation','fadeInLeft .6s');
            break;
        case 'img3':
            imgLarge.css('background-image',img[2]);
            imgArea.css('background-image',img[2]);
            imgLarge.css('animation','fadeInRight .6s');
            break;
        case 'img4':
            imgLarge.css('background-image',img[3]);
            imgArea.css('background-image',img[3]);
            imgLarge.css('animation','fadeInLeft .6s');
            break;
        case 'img5':
            imgLarge.css('background-image',img[4]);
            imgArea.css('background-image',img[4]);
            imgLarge.css('animation','fadeInRight .6s');
            break;
        case 'img6':
            imgLarge.css('background-image',img[5]);
            imgArea.css('background-image',img[5]);
            imgLarge.css('animation','fadeInLeft .6s');
            break;
        case 'img7':
            imgLarge.css('background-image',img[6]);
            imgArea.css('background-image',img[6]);
            imgLarge.css('animation','fadeInRight .6s');
            break;
        case 'img8':
            imgLarge.css('background-image',img[7]);
            imgArea.css('background-image',img[7]);
            imgLarge.css('animation','fadeInLeft .6s');
            break;
        case 'img9':
            imgLarge.css('background-image',img[8]);
            imgArea.css('background-image',img[8]);
            imgLarge.css('animation','fadeInRight .6s');
            break;
        
    }
}

//function for text change in book box
function change(x){
    switch(x){
        case 'img1':
            document.getElementById('car-name').innerText = 'Acura';
            document.getElementById('car-model').innerText = 'NSX Coupe';
            document.getElementById('car-price').innerText = '$ 150,000';
            document.getElementById('tprice').innerText = '$ 150,500';
            break;
        case 'img2':
            document.getElementById('car-name').innerText = 'Bentley';
            document.getElementById('car-model').innerText = 'Continental GT W12';
            document.getElementById('car-price').innerText = '$ 195,000';
            document.getElementById('tprice').innerText = '$ 195,500';
            break;
        case 'img3':
            document.getElementById('car-name').innerText = 'Aston Martin';
            document.getElementById('car-model').innerText = 'DBS Superleggera';
            document.getElementById('car-price').innerText = '$ 130,000';
            document.getElementById('tprice').innerText = '$ 130,500';
            break;
        case 'img4':
            document.getElementById('car-name').innerText = 'Dodge Challenger';
            document.getElementById('car-model').innerText = 'SRT Demon';
            document.getElementById('car-price').innerText = '$ 84,000';
            document.getElementById('tprice').innerText = '$ 84,500';
            break;
        case 'img5':
            document.getElementById('car-name').innerText = 'Ferrari';
            document.getElementById('car-model').innerText = 'F458 Italia';
            document.getElementById('car-price').innerText = '$ 220,000';
            document.getElementById('tprice').innerText = '$ 220,500';
            break;
        case 'img6':
            document.getElementById('car-name').innerText = 'Lamborghini';
            document.getElementById('car-model').innerText = 'Huracan';
            document.getElementById('car-price').innerText = '$ 165,000';
            document.getElementById('tprice').innerText = '$ 165,500';
            break;
        case 'img7':
            document.getElementById('car-name').innerText = 'Jaguar';
            document.getElementById('car-model').innerText = 'F-Type';
            document.getElementById('car-price').innerText = '$ 59,900';
            document.getElementById('tprice').innerText = '$ 60,400';
            break;
        case 'img8':
            document.getElementById('car-name').innerText = 'Mercedes';
            document.getElementById('car-model').innerText = 'AMG S63';
            document.getElementById('car-price').innerText = '$ 125,000';
            document.getElementById('tprice').innerText = '$ 125,500';
            break;
        case 'img9':
            document.getElementById('car-name').innerText = 'Porsche';
            document.getElementById('car-model').innerText = '911';
            document.getElementById('car-price').innerText = '$ 133,300';
            document.getElementById('tprice').innerText = '$ 133,800';
            break;
        

    }
}

//close btn function
$('.close,#cancel').on('click',function(){
    nav.css('display','');
    imgLarge.css('display','none');
    bookForm.css('display','none');
});

//expand btn function
$('.fa-expand').on('click',function(){
    nav.css('display','none');
    imgLarge.css('display','block');
    var Id = $(this).attr('id');
    check(Id);
});

//buy btn function
$('.btn').on('click',function(){
    bookForm.css('display','block');
    nav.css('display','none');
    bookContent.css('display','block');
    var imgId = $(this).attr('id');
    check(imgId);
    change(imgId);
});



