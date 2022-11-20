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

   
    console.log(token)
    return token;
}





let func_that_needs_the_token = async () => {
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
        "merchant_order_id": 777,
        "items": [{
            "name": "ASC1515",
            "amount_cents": "1000",
            "description": "Smart Watch",
            "quantity": "1"
    }]
        })
    }).then(resp => resp.json());

   
    console.log(id)
     return id;


}


func_that_needs_the_token();
