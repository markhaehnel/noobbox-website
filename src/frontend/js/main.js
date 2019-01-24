let ts3clients = document.querySelector('#ts3clients')

function handleError() {
  ts3clients.textContent = "Offline"
}

(async function(){
  try {
    let response = await fetch('/api/teamspeak')
    if (response.status === 200) {
      let data = await response.json()
      
      ts3clients.textContent = data.clientsOnline + ' / ' + data.clientsMax
    } else {
      handleError()
    }
  } catch (e) {
    handleError()
  }
})();
