randoNum = Math.floor(Math.random()*1000000);
setTimeout(250);
console.log(randoNum)








let token_func = async () => {
    let {token} = await fetch('https://accept.paymob.com/api/auth/tokens', {
        method: 'POST',                                                                
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            "api_key": "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2libUZ0WlNJNkltbHVhWFJwWVd3aUxDSndjbTltYVd4bFgzQnJJam8yTWpZNE5qbDkuRUNhck5jVk4xNlV2c0tYZ2JzdUFRRFdLX1dCUlBPU2dpLUh3U0J0TUM5WmUwd1Yzem10YW1ydmVaQU9xci1LZ1hYUkZWUTA1eVhDdkRTMllzY3Y3Znc="
        })
    }).then(resp => resp.json());

   
    //console.log(token)
    return token;
}





let get_id = async () => {
    const token = await token_func();
    let {id} = await fetch('https://accept.paymob.com/api/ecommerce/orders', {
        method: 'POST',                                                                
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

    "auth_token":  token,
        "delivery_needed": "false",

        "amount_cents": "1000",
        "currency": "EGP",
        "merchant_order_id": randoNum,
        "items": [{
            "name": "ASC1515",
            "amount_cents": "1000",
            "description": "Smart Watch",
            "quantity": "1"
    }]
        })
    }).then(resp => resp.json());

   
    //console.log(id)
     return id;


}


//get_id();



let get_ifram_token = async () => {
    const Auth_token = await token_func();
    console.log(Auth_token)
    const id = await get_id();
    console.log(id)

    let {token} = await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
        method: 'POST',                                                                
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            
            

            "auth_token": Auth_token,
            "amount_cents": "1000", 
            "expiration": 3600, 
            "order_id": id,
            "billing_data": {
              "apartment": "803", 
              "email": "claudette09@exa.com", 
              "floor": "42", 
              "first_name": "Clifford", 
              "street": "Ethan Land", 
              "building": "8028", 
              "phone_number": "+86(8)9135210487", 
              "shipping_method": "PKG", 
              "postal_code": "01898", 
              "city": "Jaskolskiburgh", 
              "country": "CR", 
              "last_name": "Nicolas", 
              "state": "Utah"
            }, 
            "currency": "EGP", 
            "integration_id": 3095610 ,
            "lock_order_when_paid": "false"       
       
       
        })

    }).then(resp => resp.json());

   
    console.log(token)
    return token;
}



get_ifram_token()

