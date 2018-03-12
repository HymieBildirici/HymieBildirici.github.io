function printDetails() {
    const fields = document.getElementsByClassName('formFields');
    for (i in fields) {
        console.log(fields[i].value);
    }
}
