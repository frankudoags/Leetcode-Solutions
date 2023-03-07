let codeDB: Map<string, string> = new Map(),
    urlDB: Map<string, string> = new Map()
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const getCode = () => {
    let code = new Array(6).fill(0)
        .map(_ => chars.charAt(~~(Math.random() * 62)))
    return "http://tinyurl.com/" + code.join("")
}
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    if(urlDB.has(longUrl)) return urlDB.get(longUrl);
    let code = getCode();
    while(codeDB.has(code)) code = getCode();
    codeDB.set(code, longUrl);
	urlDB.set(longUrl, code);
    return code;
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    return codeDB.has(shortUrl) ? codeDB.get(shortUrl) : "";	
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */