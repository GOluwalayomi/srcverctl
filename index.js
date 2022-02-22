
const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
class Patient {
    constructor (fname, lname, phone) {
        this.firstname = fname;
        this.lastname = lname;
        this.phone = phone;
        this.regdate = new Date();
    }
    getName() {
        return (this.firstname + " " + this.lastname);
    }
    getPhone() {
        return this.phone;
    }
    getRegDate() {
        let regd = this.regdate;
        return regd.getDate() + '-' + Months[regd.getMonth()] + "-" + regd.getFullYear();
    }
    changePhone( phone ) {
        this.phone = phone;
    }
}
let patient = new Patient("John", "Davis", 6786871029 );
let data = patient.getName() + "   " + patient.getRegDate();
document.getElementById("patient").innerHTML=data;
