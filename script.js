

let query = '';
let display='';
let disp_html = document.getElementById('display');

function press(number){
    if (number == '.' && query.length > 0 && query[query.length-1] == '.'){
        return;
    }
    query+=number;
    display +=number;
    disp_html.innerHTML = display;
}

function setOP(operation){
    if (query.length == 0){
        return;
    }
    if (query[query.length-1] == '.'){
        query=query.substring(0, query.length-1);
    }
    if ((query[query.length-1] == '+') ||(query[query.length-1] == '-')||(query[query.length-1] == '*')||(query[query.length-1] == '/')){
        query=query.substring(0, query.length-1);
    }
    query+=operation;
    display='';
}


function clr(){
    query='';
    display='';
    disp_html.innerHTML = '0';
}


function calculate(){
    let multiply = /[0-9\.]+\*[0-9\.]+/;
    let divide = /[0-9\.]+\/[0-9\.]+/;
    let add = /[0-9\.]+\+[0-9\.]+/;
    let subtract=/[0-9\.]+\-[0-9\.]+/;
    while(multiply.test(query) || divide.test(query)){
        let multiplyObj=multiply.exec(query);
        let divideObj = divide.exec(query);
        if (multiplyObj && (!(divideObj) || (divideObj.index > multiplyObj.index))){
            let firstNum =  parseFloat(multiplyObj[0]);
            let secondNum = parseFloat((/(?<=\*)[0-9\.]+/.exec(multiplyObj[0]))[0]);
            query =query.replace(multiply, firstNum*secondNum);
        }
        else{
            let firstNum =  parseFloat(divideObj[0]);
            let secondNum = parseFloat((/(?<=\/)[0-9\.]+/.exec(divideObj[0]))[0]);
            query =query.replace(divide, firstNum/secondNum);            
        }
    }

    while(add.test(query) || subtract.test(query)){
        let addObj=add.exec(query);
        let subtractObj = subtract.exec(query);
        if (addObj && (!(subtractObj) || subtractObj.index > addObj.index)){
            let firstNum =  parseFloat(addObj[0]);
            let secondNum = parseFloat((/(?<=\+)[0-9\.]+/.exec(addObj[0]))[0]);
            query =query.replace(add, firstNum+secondNum);
        }
        else{
            let firstNum =  parseFloat(subtractObj[0]);
            let secondNum = parseFloat((/(?<=\-)[0-9\.]+/.exec(subtractObj[0]))[0]);
            query =query.replace(subtract, firstNum-secondNum);            
        }
    }
    if (isNaN(parseFloat(query))){
        disp_html=0;
    }
    else{
        disp_html.innerHTML = parseFloat(query);
    }
    query='';
    display='';
}