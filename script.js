
function display() {
  const myButton = document.getElementById('ok');
  const name = document.getElementById('nama');
  const amount = document.getElementById('pilihan');
  myButton.disabled = true;
  name.disabled = true;
  amount.disabled = true;
  const parent = document.getElementById("select");
  const n = amount.value;
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      const label = document.createElement("label");
      label.textContent = "Input " + (i + 1) + ": ";
      const input = document.createElement("input");
      input.type = "text";
      input.setAttribute("id", ("inpt" + i));

      parent.appendChild(label)
      parent.appendChild(input);
      parent.appendChild(document.createElement("br"));
    }
    const parent2 = document.getElementById("okBut");
    parent2.appendChild(document.createElement("br"));
    const button = document.createElement("button");
    button.textContent = "Ok";
    button.setAttribute("id", ("ok2"));
    button.onclick = secondDisp;
    parent2.appendChild(button);
    parent2.appendChild(document.createElement("br"));
    parent2.appendChild(document.createElement("br"));
  } else {
    myButton.disabled = false;
    amount.disabled = false;
    alert("Value pililan harus lebih dari 0")
    document.getElementById('pilihan').value = ''
  }
}

function secondDisp() {
  const myButton = document.getElementById('ok2');
  for (let i = 0; i < document.getElementById('pilihan').value; i++) {
    document.getElementById("inpt" + i).disabled = true;
  }
  myButton.disabled = true;
  const n = document.getElementById("pilihan").value;
  const options = [];
  for (let x = 0; x < n; x++) {
    options.push(document.getElementById("inpt" + x).value)
  }

  const selectElement = document.createElement("select");
  for (let i = 0; i < options.length; i++) {
    const optionElement = document.createElement("option");
    optionElement.textContent = options[i];
    optionElement.value = options[i].toLowerCase().replace(/\s/g, "-");
    selectElement.appendChild(optionElement);
  }
  selectElement.setAttribute("id", "dropSelect");
  const parent3 = document.getElementById("okBut2");
  const button = document.createElement("button");
  button.textContent = "Ok";
  button.setAttribute("id", ("ok3"));
  button.onclick = thirdDisp;
  parent3.appendChild(selectElement);
  parent3.appendChild(document.createElement("br"));
  parent3.appendChild(document.createElement("br"));
  parent3.appendChild(button);
}
function thirdDisp() {
  const dropSelect = document.getElementById('dropSelect');
  document.getElementById('ok3'.disabled = true);
  dropSelect.disabled = true;
  const selectedValue = dropSelect.value;

  const parent4 = document.getElementById("result");
  const paragraph = document.createElement('p');


  paragraph.textContent = 'Hallo, nama saya ' + document.getElementById("nama").value + ', saya mempunyai sejumlah ' + document.getElementById('pilihan').value + ' pilihan yaitu '
  let temp = ''
  for (let x = 0; x < document.getElementById('pilihan').value; x++) {
    temp = temp + (document.getElementById("inpt" + x).value) + ', '
  }
  paragraph.textContent = paragraph.textContent + temp + ' dan saya memilih ' + selectedValue;

  parent4.appendChild(paragraph);
}