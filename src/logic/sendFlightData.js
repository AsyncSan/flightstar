export function sendFirstDataToServer(data, evt) {
  if (data.name !== "" && data.date !== "") {
    console.log("I can actually send this!");
  } else {
    console.log("I need more stuff to send this!");
  }
}
