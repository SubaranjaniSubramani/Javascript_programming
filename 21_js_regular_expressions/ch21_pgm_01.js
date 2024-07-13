function is_valid_variable(variableName) {
    const validVariablePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

   
    return validVariablePattern.test(variableName);
}



console.log(is_valid_variable('first_name')); 
console.log(is_valid_variable('first-name')); 
console.log(is_valid_variable('1first_name')); 
console.log(is_valid_variable('firstname')); 