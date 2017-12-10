

/** Count card **/

var mouse = {
      X   : 0,
      Y   : 0,
      CX  : 0,
      CY  : 0
    },
    block = {
      X   : mouse.X,
      Y   : mouse.Y,
      CX  : mouse.CX,
      CY  : mouse.CY
    },
    imags = [
      'images/14.jpg'
    ];

$('.block').on('mousemove', function(e) {
  mouse.X   = (e.pageX - $(this).offset().left) - $('.block').width() / 2;
  mouse.Y   = (e.pageY - $(this).offset().top) - $('.block').height() / 2;
})

$('.block').on('mouseleave', function(e) {
  mouse.X   = mouse.CX;
  mouse.Y   = mouse.CY;
})

setInterval(function(){

  block.CY   += (mouse.Y - block.CY) / 12;
  block.CX   += (mouse.X - block.CX) / 12;

  $('.block .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #fff, transparent)')
  $('.block').css({
    transform : 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)'
  })

}, 20);

$('.count-card .item').each(function(i){
  
  if(i == 0){
    $(this).addClass('active');
  }
  
  $(this).attr('id', 'slide-'+i);
  
  $(this).prepend(
    $('<div>', {class: 'blur', style: 'background-image: url(' + imags[i] + ');'}),
    $('<div>', {class: 'bg', style: 'background-image: url(' + imags[i] + ');'})
  )
  
  $(this).find('.block').css('background-image', 'url(' + imags[i] + ')')
  
})


var timeline = new TimelineMax({
    repeat: -1,
    yoyo: true
  }),
  feTurb = document.querySelector('#feturbulence');

timeline.add(
  TweenMax.to(feTurb, 8, {
    onUpdate: function() {
      var bfX = this.progress() * 0.005 + 0.015, //base frequency x
        bfY = this.progress() * 0.05 + 0.1, //base frequency y
        bfStr = bfX.toString() + ' ' + bfY.toString(); //base frequency string
      feTurb.setAttribute('baseFrequency', bfStr);
    }
  }), 0
);

/** End counr card **/
