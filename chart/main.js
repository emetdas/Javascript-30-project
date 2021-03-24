var ctx = document.querySelector("#myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Html", "css", "Javascrpt"],
    datasets: [
      {
        data: [14, 12, 15],
        label: "Programming Language",
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
  },
  options: {
    responsive: false,
    layout: {
      padding: { left: 50, right: 50,top:50,},
    },
  },
});
