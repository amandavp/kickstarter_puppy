function renderImages(images) {
  for(var i=0; i<images.length; i++) {
    var img = images[i];
    var $wrapper = document.createElement('div');

    var $img = document.createElement('img');
    $img.setAttribute('src', img.src);
    $img.setAttribute('class', img.class);
    $img.setAttribute('alt', img.caption);

    var $caption = document.createElement('p');
    $caption.innerText = img.caption;

    $wrapper.appendChild($caption);
    $wrapper.appendChild($img);

    document.body.appendChild($wrapper);
  }
}

var images = [
  {
    src: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
    caption: 'Black Belt'},
  {
    src:
    'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-04.jpg',
    caption: 'Brown Belt'
  },
  {
    src:
    'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
    caption: 'Orange Belt'},
 {
   src: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-05.jpg',
   caption:  'Yellow Belt'},

];
function clickMe(){
  renderImages(images);
};

$('#imgContainer > img').each(function(){
    //get img dimensions
    var h = $(this).height();
    var w = $(this).width();

    //get div dimensions
    var div_h =$('#imgContainer').height();
    var div_w =$('#imgContainer').width();

    //set img position
    this.style.top = Math.round((div_h - h) / 2) + 'px';
    this.style.left = '50%';
    this.style.marginLeft = Math.round(w/2) + 'px';
});
