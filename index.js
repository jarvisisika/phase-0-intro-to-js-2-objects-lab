let employee = {
    name: "John Smith",
    streetAddress: "123 Main St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // return a new object with updated property
    return { ...employee, [key]: value };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // update property value in place
    employee[key] = value;
    // return updated object (optional)
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    // create a new object with the specified key removed
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    // return updated object
    return updatedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // delete property from original object
    delete employee[key];
    // return original object (optional)
    return employee;
  }
  
