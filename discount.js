document.addEventListener("DOMContentLoaded", function () {

  let toastQue = [];

  document.getElementById('discount-row').addEventListener('click', function (e) {
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
      document.getElementById('product').innerHTML = e.target.dataset['product'];
      document.getElementById('toastTitle').innerHTML = e.target.dataset['title'];
      document.getElementById('toastCode').innerHTML = e.target.dataset['code'];
      bootstrap.Toast.getOrCreateInstance(document.getElementById(e.target.dataset['toastid'])).show();
      toastQue.push(document.getElementById(e.target.dataset['toastid']))
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (toastQue.length > 0){
          bootstrap.Toast.getOrCreateInstance(toastQue.shift()).hide();
          
        }
    }
  });
});




  