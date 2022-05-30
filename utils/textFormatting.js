function optionFormatter(obj){
    let string = '';
    for(let key in obj){
        if(obj[key] === 0){
            string += `${key}\n`;
        } else {
            string += `${obj[key]} ${key}\n`; 
        }
    }
    return obj;
}

export { optionFormatter };