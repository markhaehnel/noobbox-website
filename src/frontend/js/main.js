let ts3clients = document.querySelector('#ts3clients')

function handleError() {
  ts3clients.textContent = "🤷"
}

(async function(){
  try {
    let response = await fetch('/.netlify/functions/teamspeak')
    if (response.status === 200) {
      let data = await response.json()
      ts3clients.textContent = data.clientsOnline + ' plebs online'
    } else {
      handleError()
    }
  } catch (e) {
    handleError()
  }
})();
