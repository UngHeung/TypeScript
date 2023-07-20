var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    // method
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
