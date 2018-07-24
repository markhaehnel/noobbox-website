// Get TeamSpeak server status
var xhr = new XMLHttpRequest()
xhr.addEventListener('load', reponseReceived)
xhr.open('GET', 'https://api.planetteamspeak.com/serverstatus/ezhub.de:9987/')
xhr.send()

function reponseReceived () {
  var element = document.getElementById('ts3status')
  var json = JSON.parse(this.response)
  if (this.status === 200 && json.status === 'success' && json.result.online) {
    element.innerText = json.result.users + ' / ' + json.result.slots
  } else {
    element.innerText = 'Offline'
  }
}

// Set year in footer
document.getElementById('year').innerText = new Date().getFullYear()
