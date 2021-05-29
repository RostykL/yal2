export const  sortEmployees = (employees, alphabet) => {
  let updEmployees = new Map();

  for(let i = 0; i < alphabet.length; i++) {
    updEmployees[alphabet[i]] = []
    for(let j = 0; j < employees.length; j++) {
      if(employees[j]['lastName'][0].toLowerCase() === alphabet[i]) {
        updEmployees[alphabet[i]].push(employees[j])
      }
    }
  }
  return updEmployees
}