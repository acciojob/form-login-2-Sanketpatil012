//your JS code here. If required.

let btn= document.getElementById("btn")

btn.addEventListener('click' , ()=>{
    event.preventDefault()
	let firstname= document.getElementById('name').value 
	let  lastname= document.getElementById('last_name').value
	let  phoneNumber= document.getElementById('number').value
	let emailid = document.getElementById('email').value
	alert(`First Name:${firstname} Last Name:${lastname} Phone Number:${phoneNumber} Email ID:${emailid}   `)
})



