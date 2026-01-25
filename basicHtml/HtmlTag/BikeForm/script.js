function clearForm() {
  console.log("Clear From Button Click");
}
function predict() {
  console.log("Predict Button Clicked");
  const ba = document.getElementById("bikeAge").value;
  const ct = document.getElementById("city").value;
  const on = document.getElementById("owner").value;
  const pw = document.getElementById("power").value;
  const bn = document.getElementById("brand").value;
  const op = document.getElementById("originalPrice").value;
  const kd = document.getElementById("kms_driven").value;

  console.log("Bike Age is:" + ba);
  console.log("City is:" + ct);
  console.log("Owner is:" + on);
  console.log("Power is:" + pw);
  console.log("Brand is:" + bn);
  console.log("Original Price is:" + op);

  const data = {
    bikeAge: ba,
    city: ct,
    owner: on,
    power: pw,
    brand: bn,

    originalPrice: op,
    kms_driven: kd,
  };
  console.log("Data:" + data);

  document.getElementById("bikeAge").value = "";
  document.getElementById("city").value = "";
  document.getElementById("owner").value = "";
  document.getElementById("power").value = "";
  document.getElementById("brand").value = "";
}
