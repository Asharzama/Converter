function convert(){
    let input = document.getElementsByClassName("input")[0].value;
    let output = document.getElementsByClassName('output')[0];
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    
    // From list
    switch (from) {
        case "decimal":
            input =  parseInt(input, 10).toString(10);
            break;
        case "hexadecimal":
            input =  parseInt(input, 16).toString(10);
            break;
        case "octal":
            input =  parseInt(input, 8).toString(10);  
            break;
        case "binary":
            input =  parseInt(input, 2).toString(10);
            break;
    }

    // To list
    switch (to) {
        case "decimal":
            output.value = parseInt(input, 10).toString();
            break;
        case "hexadecimal":
            output.value = parseInt(input,10).toString(16).toUpperCase();
            break;
        case "octal":
            output.value = parseInt(input,10).toString(8);
            break;
        case "binary":
            output.value = parseInt(input,10).toString(2);
            break;
    }
}

function reset(){
    let input = document.getElementsByClassName("input")[0];
    let output = document.getElementsByClassName('output')[0];

    input.value = "";
    output.value = "";
}

function swap(){
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    document.getElementById("from").value = to;
    document.getElementById("to").value = from;
}
