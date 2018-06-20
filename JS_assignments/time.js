function Time(HOUR,MINUTE,PERIOD){
    if (PERIOD==="AM") {
      
    if(HOUR>=1 && MINUTE>30) {
      var a = HOUR+1;
    console.log("It's almost",a, "in the morning");
    }
    else {
      console.log("It's", MINUTE, "minutes past", HOUR, "in the morning");
    }
    }
    else {
    if (HOUR<=12 && MINUTE<30) {
    console.log("It's just after", HOUR, "in the evening");
    }
    else {
       var b = HOUR+1;
      console.log("It's almost", b, "in the evening");
    }
    }
    }
    Time(8,50,"PM");
    Time(7,15,"PM");