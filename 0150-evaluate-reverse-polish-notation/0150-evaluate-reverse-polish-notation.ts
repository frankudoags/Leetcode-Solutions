function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for (let token of tokens) {
        //if it is an operator i.e * or / or + or -
        if (operators[token]) {
            //extract the function of the operator
            let operation = operators[token];
            //pop off the last two elements off the stack
            let number2 = stack.pop()
            let number1 = stack.pop()
            stack.push(operation(number1, number2))   
        }
        //is a number
        else {
            stack.push(Number(token))
        }
    }

    //ans is the only thing left on stack, pop and return answer
    return stack.pop()
};

const operators: Record<string, (a: number, b: number) => number> = {
    "*": (a, b) => a * b,
    "/": (a, b) =>  Math.trunc(a / b),
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
}