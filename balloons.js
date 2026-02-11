document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  // randomize title
  const animations = ['animate__flash', 'animate__bounce', 'animate__pulse', 'animate__rubberBand', 'animate__shakeX', 'animate__shakeY', 'animate__headShake', 'animate__shake', 'animate__tada', 'animate__wobble', 'animate__jello', 'animate__heartBeat'];
  const randomAnim = animations[Math.floor(Math.random() * animations.length)];
  console.log(randomAnim);
  document.querySelector(".greeting").classList.add(randomAnim);

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  let checkboxes = document.querySelectorAll('input[type="checkbox"]')

  document.getElementById('checkbox-card').addEventListener('change', function (e) {
    // handle select all
    if (e.target.id === 'all') {
      checkboxes.forEach(function (c) {
        if (e.target.checked) {
          c.checked = true;
          const elem = document.getElementById(c.id + 'Img');
          elem.style.visibility = "visible";
          elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
          elem.classList.add("animate__animated", "animate__bounceInDown")
        }
        else {
          c.checked = false;
          const elem = document.getElementById(c.id + 'Img');
          elem.style.visibility = "visible";
          elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
          elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
      })
    }

    if (e.target.classList.contains('form-check-input') && (e.target.id !== 'all')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });


  // submit checks checkboxes
  document.getElementById('submit').addEventListener('click', function (e) {

    let noneChecked = true
    checkboxes.forEach(function (c) {
      if (c.checked) {
        noneChecked = false
      }
    })

    const toastLiveExample = document.getElementById('liveToast')

    if (noneChecked) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastBootstrap.show()
    }
  })

  document.getElementById('all').addEventListener('change', function (e) {

  })

  // changing h1 on hover over label
  let labels = document.querySelectorAll('label[class="form-check-label change-color"]');
  labels.forEach(function (l) {
    l.addEventListener("mouseenter", function () {
      document.querySelector('h1').style.color = l.htmlFor;
    });

    l.addEventListener("mouseleave", function () {
      document.querySelector('h1').style.color = "";
    });
  })

});