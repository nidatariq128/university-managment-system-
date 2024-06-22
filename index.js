class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    rollNumber;
    courses;
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses = [];
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
class Department {
    name;
    courses;
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(Course) {
        this.courses.push(Course);
    }
}
const students1 = new Student("Nida", 18, 12345);
const students2 = new Student("Mahi", 19, 12346);
const students3 = new Student("Rabi", 20, 12347);
const instructor1 = new Instructor("Faheem", 25, "$60000");
const instructor2 = new Instructor("Azeem", 18, "$70000");
const instructor3 = new Instructor("Naeem", 28, "$90000");
const course1 = new Course(1, "introduction to computer");
const course2 = new Course(1, "introduction to Chemistry");
const course3 = new Course(3, "Mathametic");
const department1 = new Department("Computer Scince");
const department2 = new Department("Chemistry");
const department3 = new Department("Mathematics");
students1.registerForCourse(course1);
students2.registerForCourse(course2);
students2.registerForCourse(course3);
students3.registerForCourse(course3);
department1.addCourse(course1);
department2.addCourse(course2);
department3.addCourse(course3);
course1.addStudent(students1);
course2.addStudent(students2);
course3.addStudent(students3);
course3.addStudent(students2);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
course3.setInstructor(instructor3);
console.log(department3.courses[0]);
console.log(instructor1.courses);
console.log(students1.courses[0]);
console.log(course3.students);
console.log(students1.courses);
console.log(department1.courses);
export {};
