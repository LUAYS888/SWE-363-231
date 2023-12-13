console.log('Type your question, or type "exit" to quit.');


process.stdout.write(`Your Question(don't forget the question mark at the end):`)
process.stdin.on('data', (data) => {

    const userInput = data.toString().trim();        // (.trim()) to remove leading and trailing whitespace characters (but not the spaces btw words!)


    

    switch(userInput.toLowerCase()){
        case "exit":
            console.log('See You Later!');
            process.exit(0);                                // The zero indicates that the exit is normal(no error)
        case "what is the capital of france?":
            console.log('Paris');
            break
        case "what is the largest planet in our solar system?" :
            console.log("Jupiter")   
            break
        case "what is the boiling point of water in celsius?":
            console.log("100 degrees")
            break
        case "what is the most widely spoken language in the world?":
            console.log("Mandarin Chinese")   
            break
        case "what is the speed of light in a vacuum?"   :
            console.log("299,792,458 meters per second") 
            break
        default:
            console.log("Sorry!, I don't know")    
    }



    
    
    process.stdout.write(`Your Question(don't forget the question mark at the end):`)
});