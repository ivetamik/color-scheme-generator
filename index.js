const colorSchemeContainer = document.getElementById("color-scheme-container");

const getColorBtn = document.getElementById("get-color-btn");
getColorBtn.addEventListener("click", function () {
  let inputColor = document.getElementById("input-color").value;
  inputColor = inputColor.replace("#", "");

  const customSelect = document.getElementById("custom-select").value;

  let url = `https://www.thecolorapi.com/scheme?hex=${inputColor}&mode=${customSelect}&count=5`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.colors[0].hex.value);

      for (let i = 0; i < 5; i++) {
        showColors(data.colors[i].hex.value, i);
      }
    });
  colorSchemeContainer.style.display = "grid";
});

function showColors(color, index) {
  const schemeEl = document.getElementById(`scheme-${index}`);
  schemeEl.style.backgroundColor = color;

  const hexEl = document.getElementById(`hex-${index}`);
  hexEl.textContent = color;

  hexEl.addEventListener("click", function () {
    navigator.clipboard.writeText(color);
    alert("Copied the text: " + color);
  });
}
