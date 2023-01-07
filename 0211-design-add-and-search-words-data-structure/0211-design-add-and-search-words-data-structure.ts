class TrieNode {
    children;
    isWordEnd: boolean;

    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}

class WordDictionary {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if(!node.children[word[i]]){
                node.children[word[i]] = new TrieNode();
            }
            node = node.children[word[i]];
        }
        node.isWordEnd = true;
    }

    search(word: string): boolean {
        //helper function
         // if char is a dot, that means we can match it with any letter.
        // to do that programmatically, we go through all of the children of the current node. why?
        // we don't know which, if any, of the children can use the dot to make the given string.
        // so we go through all of them and check if any of them can return true.
        function find(node, i): boolean {
            if (i === word.length) return node.isWordEnd
            if(word[i] === "."){
                for(const char in node.children){
                    //get TrieNode of char, and check if that child can be used to continue,
                    //by recursively entering the function again as if you want to continue from the child
                    const child = node.children[char]
                    if(find(child, i + 1)) return true;
                }
                return false;
            }
            // if char isn't a dot, it's more straightforward...
            if(!node.children[word[i]]) return false;
            // go on to the next node in our dictionary and the next letter in the word
            return find(node.children[word[i]], i + 1);
        }
        
        return find(this.root, 0);    
    }
    

}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */