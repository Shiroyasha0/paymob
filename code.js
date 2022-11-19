
var x;

let y = fetch('https://accept.paymob.com/api/auth/tokens', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        
        "api_key": "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2libUZ0WlNJNkltbHVhWFJwWVd3aUxDSndjbTltYVd4bFgzQnJJam8yTWpZNE5qbDkuRUNhck5jVk4xNlV2c0tYZ2JzdUFRRFdLX1dCUlBPU2dpLUh3U0J0TUM5WmUwd1Yzem10YW1ydmVaQU9xci1LZ1hYUkZWUTA1eVhDdkRTMllzY3Y3Znc="
    
    })
})
.then(response => response.json())
.then(response => JSON.stringify(response.token))
.then(token => {
    document.getElementById("token").innerHTML=token;
    return token;
})

y.then((token)=> console.log(token));
