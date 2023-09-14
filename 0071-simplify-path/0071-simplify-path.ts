function simplifyPath(path: string): string {
    //split by `/` to get all path
    let arr = path.split("/");
    //stack to hold valid paths
    const stack = [];

    for (let elem of arr) {
        //if we need to go a level higher
        if (elem === "..") {
            //remove last level from stack
            if (stack.length !== 0) stack.pop();
        }
        //ensure we're not pushing in a space like `` or pushing in a `.` which 
        //indicates same directory
        else if (elem.length >= 1 && elem !== ".") {
            stack.push(elem);
        }
    }

    return "/" + stack.join("/");
};