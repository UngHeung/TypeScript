"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
