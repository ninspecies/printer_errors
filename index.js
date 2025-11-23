function printerError(s) {
    let errors = []
    let letters = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let stringToArr = s.split("")
    for (let i = 0; i < stringToArr.length; i++) {
      if (letters.includes(stringToArr[i])) {
        errors.push(stringToArr[i])
      }
    }
    return `${errors.length}/${s.length}`;
}