
        document.getElementById("slide1").onclick =function(){
        document.getElementById("slide-active").src="../IMAGES/SLIDE1.jpg";
        }
        document.getElementById("slide2").onclick =function(){
        document.getElementById("slide-active").src="../IMAGES/SLIDE2.jpg";
       }
        document.getElementById("slide3").onclick =function(){
        document.getElementById("slide-active").src="../IMAGES/SLIDE3.jpg";
       }
        
       
       
        var arr = ["../IMAGES/SLIDE1.jpg","../IMAGES/SLIDE2.jpg","../IMAGES/SLIDE3.jpg"];
           
         for (let i=0;i<length.arr;i++)
                {
             setTimeout(function (){
                document.getElementById("slide-active").src=arr[i];
             },2000);
             console.log("changed to",i);
                }
       
       