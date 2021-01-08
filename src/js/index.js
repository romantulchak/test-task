$(document).ready(()=>{
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
                
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ],
        prevArrow:"<img class='a-left control-c prev slick-prev arrow-l' src='../images/arrow-left.svg'>",
        nextArrow:"<img class='a-right control-c next slick-next arrow-r' src='../images/arrow-right.svg'>"

    });
})