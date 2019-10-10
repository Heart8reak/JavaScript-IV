// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    };
}

class Instructor extends Person {
    constructor(inAttr) {
        super(inAttr);
        this.specialty = inAttr.specialty;
        this.favLanguage = inAttr.favLanguage;
        this.catchPhrase = inAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    };
    finalGrade(student, grade) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        let numGrade = Math.floor(Math.random() * 25) * plusOrMinus;
        // console.log('numGrade is ' + numGrade);
        let finalNum = grade + numGrade;
        return finalNum;
    }
};

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
        this.grade = stuAttr.grade;
    };
    listsSubjects() {
        return `${favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    };
    graduate(grade) {
        if (grade > 70) {
            console.log('Final Grade is ' + grade)
            return `Congratulations ${this.name} you have graduted, your final grade is ${grade}`
        } else {
            console.log('Final Grade is ' + grade)
            return `Sorry ${this.name} you will need to flex, your final grade is ${grade}`
        }
    }
}

class Pm extends Instructor {
    constructor(pmAtrr) {
        super(pmAtrr);
        this.gradClassName = pmAtrr.gradClassName;
        this.favInstructor = pmAtrr.favInstructor;
    };
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby`;
    };
    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
}

// Objects

const carlos = new Student({
    name: 'Carlos',
    age: 40,
    location: 'Orlando',
    previousBackground: 'US Marine',
    className: 'WEBPT11',
    favSubjects: ['Javascript', 'Python', 'Django'],
    grade: 1 - 100
})

const ben = new Student({
    name: 'Ben',
    age: 35,
    location: 'Arizona',
    previousBackground: 'Master of the Universe',
    className: 'WEBPT11',
    favSubjects: ['Javascript', 'C++', 'React'],
    grade: 1 - 100
})

const josh = new Student({
    name: 'Josh',
    age: 35,
    location: 'Kansas',
    previousBackground: 'Jedi Master',
    className: 'WEBPT11',
    favSubjects: ['Javascript', 'Computational Algebra', 'React'],
    grade: 1 - 100
})

const pace = new Instructor({
    name: 'Pace',
    age: 35,
    location: 'Abu Dhabi',
    specialty: 'Bitcoin Specialist',
    favLanguage: 'Javascript',
    catchPhrase: 'You guys are Awesome!'
})

const julie = new Pm({
    name: 'Julie',
    age: 29,
    location: 'New Jersey',
    gradClassName: 'Full Stack Dev',
    favInstructor: 'Sean Paul',
})

console.log(carlos)
console.log(carlos.speak())
console.log(carlos.PRAssignment('Javascript'))
console.log(carlos.sprintChallenge('Python'))
console.log(carlos.graduate(pace.finalGrade(carlos, 75)))
console.log(ben)
console.log(ben.speak())
console.log(ben.PRAssignment('CSS'))
console.log(ben.sprintChallenge('CSS'))
console.log(ben.graduate(julie.finalGrade(carlos, 81)))
console.log(josh)
console.log(josh.speak())
console.log(josh.PRAssignment('CSS'))
console.log(josh.sprintChallenge('CSS'))
console.log(josh.graduate(pace.finalGrade(carlos, 95)))
console.log(pace)
console.log(pace.favLanguage)
console.log(pace.demo('Python'))
console.log(pace.grade(carlos, 'Javascript'))
console.log(pace.finalGrade(carlos, 80))
console.log(julie)
console.log(julie.standUp('Julies Channel'))
console.log(julie.debugCode(carlos, 'Javascript'))
console.log(julie.finalGrade(carlos, 80))

