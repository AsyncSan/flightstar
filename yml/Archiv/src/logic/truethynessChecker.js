export function checkIfDataAreSet(data) {
  const reg = /^[A-Za-z]{2,4}[0-9]{2,4}/;

  if (data.name !== "" && data.date !== "") {
    if (reg.test(data.name)) {
      console.log("I can actually send this!");
      return true;
    } else {
      alert("Flugnummer ungütltig");
    }
  } else {
    console.log("I need more stuff to send this!");
    return false;
  }
}

export function checkIfChooseDataSet(data) {
  if (data.name !== "" && data.date !== "" && data.radio !== "") {
    return true;
  } else {
    return true;
  }
}
