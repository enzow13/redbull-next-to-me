window.onload = () => {
    let input_element = document.getElementById('input-cep');
    
    input_element.addEventListener("keypress", (e) => {
        if (e.key == 'Enter') {
            getUserAddress();
        }
       })
    }

function getUserAddress() {
    let user_data = document.getElementById('input-cep');
    if (user_data.value) {
        return console.log(valueToData(user_data.value))
    } else {
        userWithoutData('Você não digitou um endereço válido!');
    }
}

let check_msg_on = false;
function userWithoutData(message) {
    if (check_msg_on == false) {
        let element = document.createElement('span');
        let msg = document.createTextNode(message);
        let div_ = document.getElementById('input-box');
    
        element.appendChild(msg);
        element.setAttribute('class', 'span-error-value')
        div_.appendChild(element);
        check_msg_on = true;

        setTimeout(function () {
            element.remove();
            check_msg_on = false;
        }, 2000)
    }
}

function valueToData(data) {
    let address = {
        address: data
    }
    let address_test = data.replace(/\s/g, "+")
    let address_link = `https://www.google.com/maps/place/${address_test}`
    window.open(address_link, '_blank')
    return address
}

//@-23.9736228,-46.3142897

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -23.9736228, lng: -46.3142897 },
    zoom: 15,
  });


}

window.initMap = initMap;

