//You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:
//
//Characters ('a' to 'i') are represented by ('1' to '9') respectively.
//Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
//Return the string formed after mapping.
//
//The test cases are generated so that a unique mapping will always exist.


fun freqAlphabets(s: String): String {
  var flag = false
  var decimalNumber = ""
  var response = ""

  for (i in s.length - 1 downTo 0) {
    val char = s[i]

    if (flag) {
      decimalNumber = "$char$decimalNumber"
      if (decimalNumber.length < 2) {
        continue
      }
      response = "${(decimalNumber.toInt() + 96).toChar()}$response"
      flag = false
      decimalNumber = ""
      continue
    }

    if (char == '#') {
      flag = true
      continue
    }

    response = "${(char.digitToInt() + 96).toChar()}$response"
  }

  return response
}

val s = "10#11#12"
val s2 = "1326#"

println(freqAlphabets(s) == "jkab")
println(freqAlphabets(s2) == "acz")