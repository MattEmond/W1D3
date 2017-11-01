function countLetters(str) {
  var output = {}
  for (i = 0; i < str.length; i++) {
    if (output[str[i]]) {
    output[str[i]].occurances += 1;
    output[str[i]].indices.push(i)
  } else if (str[i] === " ") {

  } else {
    output[str[i]] = {occurances: 1, indices: [i]}
  }
}
  return output
}

input = process.argv[2]
console.log(countLetters(input))