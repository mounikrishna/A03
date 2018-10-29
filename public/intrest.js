
            function calculated()
            {
                p = document.getElementById("p").value;
                t = document.getElementById("t").value;
                r = document.getElementById("r").value;
                result = document.getElementById("result");
                
                result.innerHTML = "The interest for the given amount is:" + calculate(p,t,r);

            }
    
            function calculate(p,t,r){
                return p*t*r/100;
            }