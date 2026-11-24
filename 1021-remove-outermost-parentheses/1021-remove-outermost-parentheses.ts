function removeOuterParentheses(s: string): string {
    let res: string = "";
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        // console.log(s[i],"\n", stack)

        if (c === ")") {
            stack.pop();
        }

        // console.log(stack.length)
        if (stack.length) {
            res += c;
        }

        if (c === "(") {
            stack.push(c);
        }

    }

    return res;
};