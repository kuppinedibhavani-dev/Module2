let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
let department=emp?.details?.department;
let role=emp?.details?.profile?.role;
console.log(department);
console.log(role);