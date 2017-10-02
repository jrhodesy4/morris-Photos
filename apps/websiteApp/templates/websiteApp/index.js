
$(document).ready(function(){

  function myFunction(x) {
    x.classList.toggle("change");
  }
  $('.fam-pic').hover(
    function () {
      $(this).css({
        'background-color': 'rgba(0, 0, 0, 0.5)',
        color: 'white'

      })
      $('.fam-pic h2').css({
        'background-color': 'black'
      })
      $('.family').css('border', '8px solid black')

    },
    function () {
      $(this).css({
        'background-color': 'inherit',
        color: 'black'

      })
      $('.fam-pic h2').css({
        'background-color': 'white'
      })
      $('.family').css('border', '8px solid white')
    })


    $('.wed-pic').hover(
      function () {
        $(this).css({
          'background-color': 'rgba(0, 0, 0, 0.5)',
          color: 'white'

        })
        $('.wed-pic h2').css({
          'background-color': 'black'
        })
        $('.weddings').css('border', '8px solid black')

      },
      function () {
        $(this).css({
          'background-color': 'inherit',
          color: 'black'

        })
        $('.wed-pic h2').css({
          'background-color': 'white'
        })
        $('.weddings').css('border', '8px solid white')
      })


      $('.shower-pic').hover(
        function () {
          $(this).css({
            'background-color': 'rgba(0, 0, 0, 0.5)',
            color: 'white'

          })
          $('.shower-pic h2').css({
            'background-color': 'black'
          })
          $('.showers').css('border', '8px solid black')

        },
        function () {
          $(this).css({
            'background-color': 'inherit',
            color: 'black'

          })
          $('.shower-pic h2').css({
            'background-color': 'white'
          })
          $('.showers').css('border', '8px solid white')
        })

        $('.land-pic').hover(
          function () {
            $(this).css({
              'background-color': 'rgba(0, 0, 0, 0.5)',
              color: 'white'

            })
            $('.land-pic h2').css({
              'background-color': 'black'
            })
            $('.landscapes').css('border', '8px solid black')

          },
          function () {
            $(this).css({
              'background-color': 'inherit',
              color: 'black'

            })
            $('.land-pic h2').css({
              'background-color': 'white'
            })
            $('.landscapes').css('border', '8px solid white')
          })

          $('.go-pic').hover(
            function () {
              $(this).css({
                'background-color': 'rgba(0, 0, 0, 0.5)',
                color: 'white'

              })
              $('.go-pic h2').css({
                'background-color': 'black'
              })
              $('.gopro').css('border', '8px solid black')

            },
            function () {
              $(this).css({
                'background-color': 'inherit',
                color: 'black'

              })
              $('.go-pic h2').css({
                'background-color': 'white'
              })
              $('.gopro').css('border', '8px solid white')
            })
            $('.personal-pic').hover(
              function () {
                $(this).css({
                  'background-color': 'rgba(0, 0, 0, 0.5)',
                  color: 'white'

                })
                $('.personal-pic h2').css({
                  'background-color': 'black'
                })
                $('.personal').css('border', '8px solid black')

              },
              function () {
                $(this).css({
                  'background-color': 'inherit',
                  color: 'black'

                })
                $('.personal-pic h2').css({
                  'background-color': 'white'
                })
                $('.personal').css('border', '8px solid white')
              })


          $('.about-pic').hover(
            function () {
              $(this).css({
                'background-color': 'rgba(0, 0, 0, 0.5)',
                color: 'white'

              })
              $('.about-pic h2').css({
                'background-color': 'black'
              })
              $('.about').css('border', '8px solid black')

            },
            function () {
              $(this).css({
                'background-color': 'inherit',
                color: 'black'

              })
              $('.about-pic h2').css({
                'background-color': 'white'
              })
              $('.about').css('border', '8px solid white')
            })
            $('.button').click(
              function () {
                $('#wrapper').css({
                  'visibility': 'visible'
                })
                $('.wrapper').delay(500).slideUp(500);
              }
            )
            $('.work a').hover(
              function () {
              $(this).css({
                'font-size': '1.4em',
                transition: 'all .3s'
              })
            },
            function () {
              $(this).css({
                color: 'white',
                'font-size': '1.2em'
              })

            })

            $('.container').click(
              function () {
                var off=document.getElementById('nav-bar');
                  if (off.style.display == "none") {
                      off.style.display = "block";
                      off.style.position = 'absolute';
                      off.style.background = 'rgba(0, 0, 0, 0.8)';
                      off.style.height = '100%';
                      off.style.width = '12%';
                      off.style.zIndex = '1000';
                      off.style.textAlign = 'center';
                      off.style.paddingTop = '7%';
                      off.style.position = 'fixed';
                      off.style.animation = 'fadein 1s';
                      off.style.webkitAnimation = 'fadein 1s';
                  } else {
                      off.style.display = "none";
                  }
              }
            )

});
