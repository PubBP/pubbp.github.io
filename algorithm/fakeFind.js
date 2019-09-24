// 무게 재는 함수
function weigh(a, b, c, d) {
  var fake = 29; // 가짜 동전 설정

  if (a <= fake && fake <= b) {
    // a,b에 가짜 동전이 있다는 것
    return -1;
  }
  if (c <= fake && fake <= d) {
    // c,d에 가짜 동전이 있다는 것
    return 1;
  }
  return 0; // 동전이 그룹 안에 없다(홀수)
}

//찾는 함수
function fakeFind(left, right) {
  // 중복 검사
  if (left == right) {
    return left;
  }
  // 공식을 이용한 그룹 1,2 로 나누기
  half = parseInt((right - left + 1) / 2);
  g1_left = left;
  g1_right = left + half - 1;
  g2_left = left + half;
  g2_right = g2_left + half - 1;
  // 나눈 그룹을 무게 재는 함수를 이용 판별
  result = weigh(g1_left, g1_right, g2_left, g2_right);

  if (result == -1) {
    // 그룹 1이 가볍다면 그룹 1을 치환
    return fakeFind(g1_left, g1_right);
  } else if (result == 1) {
    // 그룹 2가 가볍다면 그룹 2를 치환
    return fakeFind(g2_left, g2_right);
  } else {
    // 동전이 그룹 안에 없으니 나머지 1개를 치환
    return right;
  }
}

n = 100; // 범위 설정
console.log(fakeFind(0, n - 1)); // 범위 내에서 찾기 시작

// 출처: 모두의 알고리즘 with 파이썬
