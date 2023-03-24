function display() {
  const myButton = document.getElementById('ok');
  const name = document.getElementById('nama');
  const amount = document.getElementById('pilihan');

  // Disable the button
  myButton.disabled = true;
  name.disabled = true;
  amount.disabled = true;
  const parent = document.getElementById("select");
  // Number of input elements you want to create
  const n = amount.value;
  // Loop through n and create input elements
  for (let i = 0; i < n; i++) {
    const label = document.createElement("label");
    label.textContent = "Input " + (i + 1) + ": ";
    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute("id", ("inpt" + i));

    // Append the input element to the parent element
    parent.appendChild(label)
    parent.appendChild(input);
    parent.appendChild(document.createElement("br"));
  }
  const parent2 = document.getElementById("okBut");
  parent2.appendChild(document.createElement("br"));
  const button = document.createElement("button");
  // Set the button's text content
  button.textContent = "Ok";
  button.setAttribute("id", ("ok2"));
  // Set the button's onclick property to call another function
  button.onclick = secondDisp;
  // Append the button to a container element on the page
  parent2.appendChild(button);
  parent2.appendChild(document.createElement("br"));
  parent2.appendChild(document.createElement("br"));
}

function secondDisp() {
  const myButton = document.getElementById('ok2');
  for (let i = 0; i < document.getElementById('pilihan').value; i++) {
    document.getElementById("inpt" + i).disabled = true;
  }
  // Disable the button
  myButton.disabled = true;
  const n = document.getElementById("pilihan").value;
  const options = [];
  for (let x = 0; x < n; x++) {
    options.push(document.getElementById("inpt" + x).value)
  }

  const selectElement = document.createElement("select");
  // Loop over the options array and create an option element for each option
  for (let i = 0; i < options.length; i++) {
    const optionElement = document.createElement("option");
    optionElement.textContent = options[i];
    optionElement.value = options[i].toLowerCase().replace(/\s/g, "-");
    selectElement.appendChild(optionElement);
  }
  selectElement.setAttribute("id", "dropSelect");
  // Append the dropdown to the body of the document
  const parent3 = document.getElementById("okBut2");
  const button = document.createElement("button");
  // Set the button's text content
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
  dropSelect.disabled = true;
 // document.getElementById("ok3").disabled = true;
  const selectedValue = dropSelect.value;

  const parent4 = document.getElementById("result");
  // Create a new paragraph element
  const paragraph = document.createElement('p');

  // Set the text content of the paragraph
  //paragraph.textContent = 'This is a new paragraph!';
  paragraph.textContent = 'Hallo, nama saya '+ document.getElementById("nama").value+', saya mempunyai sejumlah '+document.getElementById('pilihan').value+' pilihan yaitu '
  let temp=''
  for(let x=0;x<document.getElementById('pilihan').value;x++){
    temp=temp+(document.getElementById("inpt" + x).value)+', '
  }
  paragraph.textContent=paragraph.textContent+temp+' dan saya memilih '+selectedValue;

  // Add the paragraph to the document

  document.body.appendChild(paragraph);
}