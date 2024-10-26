function randomQuote(){
    var quotes=[
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", 
        "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”"  ,
        "“Love is that condition in which the happiness of another person is essential to your own.”"  ,
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”" , 
        "“You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.”" ,
        "“Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself ...”"  ,  
        "“Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.”",
        "“You do not write your life with words...You write it with actions. What you think is not important. It is only important what you do.”" 
    ]

    var author=[
        "Oscar Wilde" , "Albert Camus" , "Robert A. Heinlein" , "Dr. Seuss" , "Albert Camus" , "C.S. Lewis, The Four Loves" , "Margaret Mead" , "Patrick Ness, A Monster Calls"
    ]
        
    

    var random=Math.floor(  Math.random()  *  quotes.length );
    
    document.getElementById('quote').innerHTML=`${quotes[random]}`;
    document.getElementById('author').innerHTML="--"+`${author[random]}`;

    console.log( quotes[random]+" "+ author[random]);

    
}
