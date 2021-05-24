if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      var value = `https://www.google.com/maps/@${latitude},${longitude}`;
      var inputLocation = document.querySelector('.input-control');

      inputLocation.value = value;
    },
    function () {
      alert('Could not get your position');
    }
  );
}








