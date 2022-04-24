function romanToInt(s: string): number {
  let answer = 0;
  // 1. 숫자 정의 
  const ROMAN = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }
  // 2. 문자 for문으로 돌면서
  for (let i = 0; i<s.length; i++){
    let nowNumber = ROMAN[s[i]];
    let nextNumber = ROMAN[s[i+1]];
    
    // 3. 현재 문자의 수와 다음 숫자를 비교하고, 다음 수가 더 크다면
    if(nowNumber < nextNumber){
    // 4. 뒷 숫자에서 앞 숫자를 뺀 것을 누적해서 더하고
      answer += nextNumber - nowNumber;
      i++
    }
    else {
     // 5. 작거나 같다면 그냥 누적해서 더하기
      answer += nowNumber
    }
  }
  return answer;
};