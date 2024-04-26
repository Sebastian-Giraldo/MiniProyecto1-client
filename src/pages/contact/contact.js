"use strict";

async function sendData(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let data = {
        name: name,
        email: email,
        message: message
    };

    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData); // Mostrar la respuesta del servidor en la consola
            showConfirmationMessage(data); // Mostrar el mensaje de confirmación
        } else {
            throw new Error('Error en la solicitud al servidor');
        }
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

function showConfirmationMessage(data) {
    let confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    let dataList = document.getElementById('dataList');
    dataList.innerHTML = ''; // Limpiar la lista

    for (let key in data) {
        let listItem = document.createElement('li');
        listItem.textContent = `${key}: ${data[key]}`;
        dataList.appendChild(listItem);
    }

    let form = document.querySelector('form');
    form.style.display = 'none';
}
