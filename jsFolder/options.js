var clickedOption1=0;
var clickedOption2=0;

function option1() {
  console.log("option1");
  switch (clickedOption1){
    case 1:
      document.getElementById("p1").style.color="rgb(69, 86, 98)";
      document.getElementById("p2").style.color="rgba(69, 105, 131, 0.99)";
      document.getElementById("p3").style.color="rgba(252, 252, 252, 0.814)";
      document.getElementById("p4").style.color="rgba(245, 245, 245, 0.25)";
      document.getElementById("p5").style.color="#ffffff76";
      document.getElementById("p2").style.fontFamily="Merriweather";
      document.getElementById("p4").style.fontFamily="Typewriter";
      
      document.getElementById('img1').style.borderColor="white";
      document.getElementById('img1').style.borderWidth="6px";
      document.getElementById('img2').style.borderColor="white";
      document.getElementById('img2').style.borderWidth="6px";
      document.getElementById('img3').style.borderColor="white";
      document.getElementById('img3').style.borderWidth="6px";

      document.getElementById('sectionB').style.border="0px solid black";
      document.getElementById('StarNightH').style.border="0px solid black";
      document.getElementById('MindalH').style.border="0px solid black";
      document.getElementById('FlowersH').style.border="0px solid black";
      clickedOption1=0;
      break;
    default:
      document.getElementById("p1").style.color="white";
      document.getElementById("p2").style.color="red";
      document.getElementById("p2").style.fontFamily="Impact,Charcoal,sans-serif";
      document.getElementById("p3").style.color="rgba(245, 245, 245, 0.1)";
      document.getElementById("p4").style.color="red";
      document.getElementById("p4").style.fontFamily="Dosis"
      document.getElementById("p5").style.color="rgba(245, 245, 245, 0)";
      
      document.getElementById('img1').style.borderColor="black";
      document.getElementById('img1').style.borderWidth="6px";
      document.getElementById('img2').style.borderColor="black";
      document.getElementById('img2').style.borderWidth="6px";
      document.getElementById('img3').style.borderColor="black";
      document.getElementById('img3').style.borderWidth="6px";
      document.getElementById('sectionB').style.borderBlockColor="black";
      document.getElementById('sectionB').style.border="6px solid black";
      document.getElementById('StarNightH').style.border="6px solid black";
      document.getElementById('MindalH').style.border="6px solid black";
      document.getElementById('FlowersH').style.border="6px solid black";
      
      clickedOption1++;
      break;
  }
    
   




}
function option2(){
    console.log("option2");

    switch (clickedOption2) {
      case 1:
        document.getElementById('img1').style.borderColor="white";
        document.getElementById('img1').style.borderWidth="6px";
        
        var img1=document.getElementById('img1');
          /*var img1=document.querySelectorAll('.galleryPics');*/
          console.log(img1.clientWidth);
          var currentWidth=img1.offsetWidth;
          var currentHeigh=img1.offsetHeight;
          var newWidth=currentWidth*1.75;
          var newHeight=currentHeigh*1.75
          console.log(newWidth);
        img1.style.width=newWidth+'px';
        img1.style.height=newHeight+'px';
        console.log(img1.clientWidth);
        
        
        /* var currentSize = parseFloat(window.getComputedStyle(img1, null).getPropertyValue('clientWidth'));
          if (currentSize > 0) {
            element.style.clientWidth = (currentSize - 50) + "px";
          }
          console.log(currentSize);*/

          
          var img2=document.getElementById('img2');
          /*var img1=document.querySelectorAll('.galleryPics');*/
          console.log(img2.clientWidth);
          var currentWidth2=img2.offsetWidth;
          var currentHeigh2=img2.offsetHeight;
          var newWidth2=currentWidth2*1.75;
          var newHeight2=currentHeigh2*1.75
          console.log(newWidth2);
        img2.style.width=newWidth2+'px';
        img2.style.height=newHeight2+'px';
        console.log(img2.clientWidth);

        var img3=document.getElementById('img3');
        /*var img1=document.querySelectorAll('.galleryPics');*/
        console.log(img3.clientWidth);
        var currentWidth3=img3.offsetWidth;
        var currentHeigh3=img3.offsetHeight;
        var newWidth3=currentWidth3*1.75;
        var newHeight3=currentHeigh3*1.75
        console.log(newWidth3);
        img3.style.width=newWidth3+'px';
        img3.style.height=newHeight3+'px';
        console.log(img3.clientWidth);






        clickedOption2=0;
        break;
    
      default:
        var img1=document.getElementById('img1');
          /*var img1=document.querySelectorAll('.galleryPics');*/
          console.log(img1.clientWidth);
          var currentWidth=img1.offsetWidth;
          var currentHeigh=img1.offsetHeight;
          var newWidth=currentWidth/2;
          var newHeight=currentHeigh/2
          console.log(newWidth);
        img1.style.width=newWidth+'px';
        img1.style.height=newHeight+'px';
        console.log(img1.clientWidth);
        
        document.getElementById('img1').style.borderColor="rgb(69, 86, 98)";
        document.getElementById('img1').style.borderWidth="50px";
        /* var currentSize = parseFloat(window.getComputedStyle(img1, null).getPropertyValue('clientWidth'));
          if (currentSize > 0) {
            element.style.clientWidth = (currentSize - 50) + "px";
          }
          console.log(currentSize);*/

          
          var img2=document.getElementById('img2');
          /*var img1=document.querySelectorAll('.galleryPics');*/
          console.log(img2.clientWidth);
          var currentWidth2=img2.offsetWidth;
          var currentHeigh2=img2.offsetHeight;
          var newWidth2=currentWidth2/2;
          var newHeight2=currentHeigh2/2
          console.log(newWidth2);
        img2.style.width=newWidth2+'px';
        img2.style.height=newHeight2+'px';
        console.log(img2.clientWidth);

        var img3=document.getElementById('img3');
        /*var img1=document.querySelectorAll('.galleryPics');*/
        console.log(img3.clientWidth);
        var currentWidth3=img3.offsetWidth;
        var currentHeigh3=img3.offsetHeight;
        var newWidth3=currentWidth3/2;
        var newHeight3=currentHeigh3/2
        console.log(newWidth3);
        img3.style.width=newWidth3+'px';
        img3.style.height=newHeight3+'px';
        console.log(img3.clientWidth);



        clickedOption2++;
        break;
    }
    
  /*заблокировать нажатие кнопки*/
}