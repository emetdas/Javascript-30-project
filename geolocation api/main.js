if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      var { latitude } = position.coords;
      var { longitude } = position.coords;

      var value = `https://www.google.com/maps/@${latitude},${longitude}`;
      var inputLocation = document.querySelector('.input-control');

      inputLocation.value = value;
    },
    function () {
      alert('Could not get your position');
    }
  );
}

var btn = document.querySelector('.copy');
var inputLocation = document.querySelector('.input-control');
btn.addEventListener('click',()=>{
  inputLocation.select();
  inputLocation.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied");
});





