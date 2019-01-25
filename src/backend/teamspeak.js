const TeamSpeak3 = require("ts3-nodejs-library")

exports.handler = function(event, context, callback) {

  var ts3 = new TeamSpeak3({
    protocol: "ssh",
    host: "server.ezhub.de",
    queryport: 10022,
    serverport: 9987,
    username: process.env.TEAMSPEAK_QUERY_USERNAME || "serveradmin",
    password: process.env.TEAMSPEAK_QUERY_PASSWORD,
    keepalive: true
  })

  function doError(message) {
    ts3.quit()
    callback(message.toString())
  }

  ts3.on("ready", async () => {
    try {
      let clients = await ts3.clientList({client_type:0})
      ts3.quit()
      callback(null, {
        statusCode: 200,
        headers: {
          "Cache-Control": "public, max-age=900"
        },
        body: JSON.stringify({
          clientsOnline: clients.length,
        })
      });
    } catch (e) {
      doError(e.message)
    }
  })

  ts3.on("error", e => doError(e.message))
}

