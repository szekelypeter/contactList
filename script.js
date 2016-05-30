window.addEventListener('load', requestInfo);

function requestInfo() {
 /*   var spFirstName = document.getElementById('first_name');
    var spLastName = document.getElementById('last_name');
    var spCity = document.getElementById('city');
    var spAddress = document.getElementById('address');
    var spPhone = document.getElementById('phone');
    var spEmail = document.getElementById('email');*/
    var url ="http://www.filltext.com/?rows=10&first_name={firstName}&last_name={lastName}&city={city}&address={streetAddress}&phone={phone|format}&email={email}";
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = loadInfo;
    httpRequest.open('GET', url);
    httpRequest.send();

    function loadInfo() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                for (var i=0;i<data.length;i++){
                    var card=document.createElement('div');
                    card.id='bcbg';
                    var container=document.createElement("div");
                    container.className="container";
                    card.appendChild(container);
                    var line=document.createElement("p");
                    line.className="line1";
                    container.appendChild(line);
                    var firstName=document.createElement("span");
                    firstName.id="first_name";
                    firstName.innerHTML=data[i].first_name+" ";
                    line.appendChild(firstName);
                    var lastName=document.createElement("span");
                    lastName.id="last_name";
                    lastName.innerHTML=data[i].last_name;
                    line.appendChild(lastName);
                    document.body.appendChild(card);
                    var contact=document.createElement("div");
                    contact.className="contact";
                    container.appendChild(contact);
                    var city=document.createElement("div");
                    city.id="city";
                    city.innerHTML=data[i].city;
                    contact.appendChild(city);
                    var adress=document.createElement("div");
                    adress.id="adress";
                    adress.innerHTML=data[i].address;
                    contact.appendChild(adress);
                    var phone=document.createElement("div");
                    phone.id="phone";
                    phone.innerHTML=data[i].phone;
                    contact.appendChild(phone);
                    var email=document.createElement("div");
                    email.id="email";
                    email.innerHTML=data[i].email;
                    contact.appendChild(email);
                    var logo=document.createElement("div");
                    logo.className="logo";
                    container.appendChild(logo);

                }
            }
        }
    }
}
