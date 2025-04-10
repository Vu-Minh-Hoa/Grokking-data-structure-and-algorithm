function lengthOfLongestSubstring(s: string): number {
  let passedCharacterSet = {};
  let longestSubstring = 0, left = 0;
  for(let right = 0; right < s.length; right++) {
      let rightWindowValue = s[right];
      if(rightWindowValue in passedCharacterSet) {
          left = Math.max(left, passedCharacterSet[rightWindowValue] + 1);
      } 

      passedCharacterSet[rightWindowValue] = right;
      longestSubstring = Math.max(longestSubstring, right - left + 1)
  }
  return longestSubstring;
};