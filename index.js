/*
567. Permutation in String
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

const checkInclusion = function(s1,s2) {
  if (s1.length > s2.length) return false
  
  let s1Array = new Array(26).fill(0)
  let windowChecker = new Array(26).fill(0)
  
  for (let char of s1) {
    let idx = char.charCodeAt() - 97
    s1Array[idx]++
  }
  s1Array = s1Array.join('')
  
  for (let i = 0; i < s1.length; i++) {
    let idx = s2[i].charCodeAt() - 97
    windowChecker[idx]++
  }
  
  let start = 0
  let end = s1.length - 1
  
  while (end < s2.length) {
    if (windowChecker.join('') === s1Array) return true
    end++
    if (end === s2.length) break
    let removeStart = s2[start].charCodeAt() - 97
    let addEnd = s2[end].charCodeAt() - 97
    windowChecker[removeStart]--
    windowChecker[addEnd]++
    start++
  }
  return false
}