
// number increasing animation
function animateValue(id, start, end, duration, inc) {
    if( start === end ) return;
    var range = end - start;
    var current = start;
    var increment = end > start? inc : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if(current == end ){
        obj.innerHTML = current + "+";
        clearInterval(timer);
      }
    }, stepTime);
}


animateValue('value-1', 0, 20000, 5000, 40);
animateValue('value-2', 0, 50000, 5000, 100);
animateValue('value-3', 0, 1200, 4000, 3);
animateValue('value-4', 0, 30, 2000, 3);




// Email Form

window.addEventListener("DOMContentLoaded", function() {
    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Thanks You!";
    }

    function error() {
      status.classList.add('success');
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
  });
});
  
  // helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}