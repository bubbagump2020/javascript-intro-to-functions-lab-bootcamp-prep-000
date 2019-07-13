
function shout(String){
  String = String.toUpperCase()
  return String
}


function logShout(String){
  console.log(shout(String))
}

function whisper(String){
  String = String.toLowerCase()
  return String
}

function logWhisper(String){
  console.log(whisper(String))
}

function sayHiToGrandma(String){
  if(String === logWhisper(String)){
    console.log('I can\t hear you!')
  }
}