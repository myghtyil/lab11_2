function send()
{
  var request;
  if (window.XMLHttpRequest)
  {
          request = new XMLHttpRequest();
  }
  else
  {
          request  = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.onreadystatechange = function(){
    if(request.readyState==4 && request.status==200){
      var records = eval ("(" + request.responseText + ")");
      var text = "";
      for (var i=0; i < records.length; i++)
      {
        if (i % 2 == 0)
        {
          text += "<p style='background-color:gray'>";
        }
        else
        {
          text += "<p style='background-color:lightgray'>";
        }
        text += "<strong>" + records[i].data + "</strong><br>";
        text += records[i].message + "</p>";
      }
      document.getElementById("recordsplace").innerHTML = text;
    }
  };

  var message = document.getElementById("message").value;
  request.open("POST", "blogjson.jsp?message=" + message, true);
  request.send(null);
}
