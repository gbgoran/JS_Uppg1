document.getElementById('regform').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(mobileNumb.value)

        let errors = []
        
        for (let element of e.target.elements) {
            switch(element.tagName) {
                case 'INPUT':
                    errors.push(validateInput(element))
                    break;                    
            }            
        }    
    validateEmail(eMail)
    const id =  Date.now().toString() + Math.floor((Math.random() * 321) + 1);  
    $('.registered').html(` <div id="send">${firstName.value} ${lastName.value}</div><div id="container"><div class = "box"> <div class ="userId">${id}</div><div class ="firstName">  ${firstName.value}</div><div class ="LastName"> ${lastName.value}</div><div class ="eMail"> ${eMail.value}</div><div class ="mobileNumb"> ${mobileNumb.value}</div><div class ="streetAddress">  ${streetAddress.value}</div><div class ="postalNumber"> ${postalNumber.value}</div><div class ="postalAddress"> ${postalAddress.value}</div></div></div>`)  
    
    $(document).ready(function() {
        
        $("#send").click(function(){
            $("#container").slideToggle("slow");
        });         
    })
})

    function validateInput(element) {
        if(element.required) {
            if(element.value.length < 3) {
                console.log('Fältet måste innehålla fler tecken')
                return true
            }
        }
        return false
    }
    
    function validateEmail(eMail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(regform.eMail.value))
            {
            return (true)
            }                
        return (false)
}
    let Email = document.getElementById('eMail')

    Email.addEventListener("keyup", Event => {
        if (validateEmail(Event.target.value) == true) {        
            $('.EmailAddress').html(`<p> </p>`)
            return;
        }
        else{
            $('.EmailAddress').html(`<p> Invalid Email Address Input </p>`)        
            return;
        }
    })