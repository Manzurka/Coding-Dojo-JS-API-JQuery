function daysUntilBirthday(a) {
    while (a > 30)                                 
    { 
      console.log(a + " days until my birthday!Such a long time..");
        a = a - 1;
    }
    while (a > 5)                                 
    { 
      console.log(a + " days until my birthday!");
        a = a - 1;
    }
    while (a> 0)                                 
    { 
      console.log(a + " day(s) UNTIL MY BIRTHDAY!Hooray!");
        a = a - 1;
    }
    if (a === 0)
    {
      console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•");
    }
    }
    daysUntilBirthday(60);