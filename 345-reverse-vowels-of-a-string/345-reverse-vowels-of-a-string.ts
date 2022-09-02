function reverseVowels(s: string): string {
    const str: string[] = s.split("")
    let i: number = 0, j: number = str.length - 1;
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    
    while (i < j) {
        if(vowels.includes(str[i].toLowerCase()) && vowels.includes(str[j].toLowerCase()) ) {
            [str[i], str[j]] = [str[j], str[i]];
            i++;
            j--;
        }
        if(!vowels.includes(str[i].toLowerCase())) {
            i++;
        }
         if(!vowels.includes(str[j].toLowerCase())) {
            j--;
        }
        
    }
    
    return str.join('');
};