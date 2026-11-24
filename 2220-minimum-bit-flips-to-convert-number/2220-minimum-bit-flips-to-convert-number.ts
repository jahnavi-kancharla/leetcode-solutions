function minBitFlips(s: number, g: number): number {
let ct = 0;
    
    while (s > 0 || g > 0) {
        if ((s & 1) !== (g & 1)) {
            ct++;
        }

        s >>= 1;
        g >>= 1;
    }
    
    return ct;    
};