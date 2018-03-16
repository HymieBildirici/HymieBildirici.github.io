function submitInfo() {
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSc4Nr9DqNBjYJ7VJ2FJsEdBkPFPpA-DZZsT3aUkrXN_hCSaGA/formResponse",
      data: {"entry.617376864":document.getElementById('name').value,
             "entry.760495950":document.getElementById('phone').value,
             "entry.69628245":document.getElementById('building').value,
             "entry.177428637":document.getElementById('floor').value,
             "entry.1684890302":document.getElementById('room').value,
             "entry.825117565":document.getElementById('order').value,
             "entry.175951092":document.getElementById('times').options[document.getElementById('times').selectedIndex].value},
      type:"POST",
      dataType:"xml",
      statusCode: {0: thereWasAnError(), 200: afterSubmitHandler()}
    });
}
function thereWasAnError() {

}
function afterSubmitHandler() {
    setTimeout(function(){ alert("Your order was submitted successfully."); }, 1000);
}
