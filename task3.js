let str1 = "geeke";
let str2 = "eke";

function lcs(str1, str2, m, n) {
  if (m == 0 || n == 0) {
    return 0;
  }

  if (str1[m - 1] == str2[n - 1]) {
    return 1 + lcs(str1, str2, m - 1, n - 1);
  } else {
    return Math.max(lcs(str1, str2, m, n - 1), lcs(str1, str2, m - 1, n));
  }
}

console.log(lcs(str1, str2, str1.length, str2.length));
