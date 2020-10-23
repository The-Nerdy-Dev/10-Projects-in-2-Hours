const salaryOps = {
  salary: 0,
  setTakeAwaySalary(salary) {
    this.salary = salary;
  },
  getHouseRentalAllowance() {
    return this.salary * 0.3;
  },
  getDearnessAllowance() {
    return this.salary * 0.2;
  },
  getTravelAllowance() {
    return this.salary * 0.3;
  },
  getProvidentFund() {
    return this.salary * 0.05;
  },
  getGrossSalary() {
    return (this.salary + this.getHouseRentalAllowance()
      + this.getDearnessAllowance()
      + this.getTravelAllowance() - this.getProvidentFund());
  },
  getTax() {
    return this.getGrossSalary() * 0.1;
  },
  getNetSalary() {
    return this.getGrossSalary() - this.getTax(); 
  }
}
