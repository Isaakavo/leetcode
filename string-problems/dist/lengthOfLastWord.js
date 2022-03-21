function lengthOfLastWord(s) {
    const words = s.split(' ');
    return s.trim().split(' ').pop().length;
}
;
lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");
lengthOfLastWord("pito");
