(function() {
  var xhttp = new XMLHttpRequest();

  Array.prototype.occurrence = function(val) {
    return this.filter(e => isEquivalent(e, val)).length;
  };

  document.onmousemove = handleMouseMove;
  var mouseHistory = [];

  function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;
    event = event || window.event; // IE-ism

    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
        
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    mouseHistory.push(new AxisValuePair(event.pageX, event.pageY));
    
    if (mouseHistory.length > 0) {
      
      var dataset = mouseHistory;
      var search = new AxisValuePair(event.pageX, event.pageY);

      // Display hits count per-pixel
      document.getElementById("count").innerHTML = mouseHistory.occurrence(
        new AxisValuePair(event.pageX, event.pageY)
      );

      // POST Data to your endpoint, so you can analize it 
      // Post only when timeout is off or after certain amount of array size;
      xhttp.open("POST", "http://localhost:3000", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      console.log(event.pageX)
      xhttp.send("x="+event.pageX+"&y="+event.pageY);
    }
  }
})();
