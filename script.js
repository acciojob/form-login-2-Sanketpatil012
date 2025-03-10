//your JS code here. If required.
 document.getElementById("userForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            let firstName = document.getElementById("firstName").value.trim();
            let lastName = document.getElementById("lastName").value.trim();
            let phoneNumber = document.getElementById("phoneNumber").value.trim();
            let emailID = document.getElementById("emailID").value.trim();

            let alertMessage = `First Name: ${firstName}  Last Name: ${lastName}  Phone Number: ${phoneNumber}  Email ID: ${emailID}`;
            
            alert(alertMessage);
        });
