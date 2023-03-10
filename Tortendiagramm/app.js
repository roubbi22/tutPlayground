function drawDiagramm(parteien) {
  let sum = 0;
  parteien.map((partei) => (sum += partei.value));
  console.log(sum);
  let angle = 0;
  parteien.map((partei) => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.backgroundColor = partei.color;
    div.style.transformOrigin = "250px 250px";
    div.style.transform = `rotate(${angle}deg)`;
    document.getElementById("tortendiagramm").appendChild(div);
    angle += partei.value * (180 / sum);
  });
}

drawDiagramm([
  { name: "SPD", value: 206, color: "red" },
  { name: "CDU/CSU", value: 197, color: "black" },
  { name: "Bündnis 90/Die Grünen", value: 118, color: "green" },
  { name: "FDP", value: 92, color: "yellow" },
  { name: "AfD", value: 78, color: "blue" },
  { name: "Die Linke", value: 39, color: "purple" },
  { name: "fraktionslos", value: 6, color: "grey" },
]);
