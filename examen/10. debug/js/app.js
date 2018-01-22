var students = [
  {
    firstName: "John",
    lastName: "Snow"
  }
  {
    firstName: "Daenerys",
    lastName: "Targaryen"
  }
  {
    firstName: "Arya",
    lastName: "Stark"
  }
];


for (var i = 0; i < students.length; i++) {
  $('students').append('<li>'+students.firstName students.lastName +'</li>')
}
