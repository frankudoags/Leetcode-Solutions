class TrieNode {
    children;
    isWordEnd: boolean;

    constructor() {
        this.children = {};
        this.isWordEnd = false;
    }
}
class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) node.children[word[i]] = new TrieNode();
            node = node.children[word[i]];
        }
        node.isWordEnd = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) return false;
            node = node.children[word[i]];
        }
        return node.isWordEnd;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
         for (let i = 0; i < prefix.length; i++) {
             if(!node.children[prefix[i]]) return false;
             node = node.children[prefix[i]];
         }
         return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */