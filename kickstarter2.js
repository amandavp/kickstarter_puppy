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
    src: 'http://placekitten.com/201/201',
    caption: 'this cat',
    class: 'cat2'
  },
  {
    src: 'http://placekitten.com/201/202',
    caption: 'no, THIS cat'
  },
  {
    src: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
    caption: 'look at me now'},
  {
    src:
    'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-04.jpg',
    caption: 'cant touch this!'
  },
  {
    src:
    'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
    caption: 'new cat'},
 {
   src: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-05.jpg',
   caption:  'nice hat'},

];
function clickMe(){
  renderImages(images);
};
