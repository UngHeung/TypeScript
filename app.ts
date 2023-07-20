class Department {
  // this -> Department
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // method
  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
