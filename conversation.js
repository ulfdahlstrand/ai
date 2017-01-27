function listen(message){
  return "jag hörde: " + message;
}


function respond(context){
  var response = "hej";
  return context + ", och svarade: " + response;
}

module.exports = {
  listen: listen,
  respond: respond
};
