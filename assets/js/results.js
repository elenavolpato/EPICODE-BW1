const canvas = document.querySelector("#grafico");

new Chart(canvas, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#C2128D", "#00FFFF"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutout: "72%",
  },
});
