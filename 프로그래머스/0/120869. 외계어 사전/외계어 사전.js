function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    
    for (let word of dic) {
        if (word.length !== spell.length) continue;
        const sortedWord = word.split('').sort().join('');
        
        if (sortedWord === sortedSpell) {
            return 1;
        }
    }
    
    return 2;
}