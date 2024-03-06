export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employees = departments.reduce((acc, val) => acc.concat(val), []);
  
  let currentIndex = 0;

  return {
    next() {
      return currentIndex < employees.length ? 
             { value: employees[currentIndex++], done: false } : 
             { done: true };
    }
  };
}
