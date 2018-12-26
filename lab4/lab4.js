/*
fetch('https://api.github.com/orgs/nodejs')
  .then(response => response.json())
  .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))
*/

function loadData(){
  fetch(`https://api.github.com/users/${document.getElementById('input-object').value}`)
    .then(responce => responce.json())
    .then(data => {
      document.getElementById('avatar-image').setAttribute('src', data.avatar_url)
      document.getElementById('login-data').innerHTML = data.login || 'No Data'
      document.getElementById('name-data').innerHTML = data.name || 'No Data'
      document.getElementById('company-data').innerHTML = data.company || 'No Data'
      document.getElementById('location-data').innerHTML = data.location || 'No Data'
      document.getElementById('blog-data').innerHTML = data.blog || 'No Data'
      document.getElementById('email-data').innerHTML = data.email || 'No Data'
      document.getElementById('bio-data').innerHTML = data.bio || 'No Data'
    })
    .catch(error => console.error(error))
  }

//preload default profile
loadData()
