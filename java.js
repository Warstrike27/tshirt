const btn = document.querySelector('.btn')

btn.addEventListener('click', (e)=> {
    e.preventDefault()
    const values = [
        document.forms["athuForm"]["printing"].value,
        document.forms["athuForm"]["location"].value,
        document.forms["athuForm"]["printsize"].value,
        document.forms["athuForm"]["tagline"].value,
        document.forms["athuForm"]["addinfo"].value,
        document.forms["athuForm"]["color"].value,
        document.forms["athuForm"]["design"].value,
        document.forms["athuForm"]["size"].value,
        document.forms["athuForm"]["material"].value,
        document.forms["athuForm"]["number"].value,
        document.forms['athuForm']['date'].value,
        document.forms["athuForm"]["name"].value,
        document.forms["athuForm"]["email"].value,
        document.forms["athuForm"]["mobile"].value,
        document.forms["athuForm"]["city"].value,
        document.forms["athuForm"]["state"].value,
        document.forms["athuForm"]["pincode"].value,
        document.forms["athuForm"]["address"].value,
        "Final Order Price : Rs. 999"
    ];
    console.log(values)
    validateForm(values)
})
const validateForm = (values) => {
    const hasEmptyFields = Object.values(values).some(
        (item) => item === ""
    );
    let receipt = true
    if (hasEmptyFields) {
        alert("Please fill in all fields");
        receipt = false
        return;
    }
    if (!hasEmptyFields) {
        if (values[4].length > 50) {
            alert('Please enter a Info less than 50 characters');
            receipt = false
        }
        if (values[3].length > 20) {
            alert('Please enter a tagline less than 20 characters');
            receipt = false
        }
        if (values[9] < 1) {
            alert('You can not order less than one shirt')
            receipt = false
        }
        if (values[16].length > 6) {
            alert('Please enter a valid pincode')
            receipt = false
        }
        if (values[16].length < 6) {
            alert('Please enter a valid pincode')
            receipt = false
        }
        if (values[13].length > 10) {
            alert('Please enter a valid mobile number')
            receipt = false
        }
        if (values[13].length < 10) {
            alert('Please enter a valid mobile number')
            receipt = false
        }
        if (receipt) {
            generateReceipt(values)
        }
    }
}

const generateReceipt = (values) => {
    var newWindow = window.open('', '', 'height=600, width=600');
    newWindow.document.write('<html>');
    newWindow.document.write('<body>');
    newWindow.document.write(`<style>
        p{
            text-align: center;
        }
    </style>`)
    newWindow.document.write('<h3> Receipt </h3>')
    newWindow.document.write(`${values.map((item) => {
        return `
        <p>${item}</p>`
    })}`);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
}
