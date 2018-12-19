var distance;
    var current;
    var remaining 
        
        function distFunc()
        {
        var distance = document.getElementsByName('distance').value;
        var current = document.getElementsByName('current').value;
        var remaining = var distance - var current;
            if(distance < 0)
            {
                distance.onSubmit console.log(remaining);
            }   
        }
        
        function checkNegativeValue()
        {
          var distance = parseFloat(document.getElementByName("distance").value);
          if(distance < 0)
          {
            distance.onSubmit alert("Negative Value is not allowed");
            return false;
          }
        }
        
          if(distance > 0)
          {
           var name = document.getElementById('distance').value;
           console.log(distFunc());
          }
        
          document.getElementByName("output").value;