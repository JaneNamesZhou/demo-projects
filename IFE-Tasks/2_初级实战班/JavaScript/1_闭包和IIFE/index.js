let students = [
    { name: "Susan", ID: 1, score: "90", rank: 6 },
    { name: "Jackson", ID: 2, score: "88", rank: 7 },
    { name: "Bob", ID: 3, score: "45", rank: 18 },
    { name: "Jennie", ID: 3, score: "99", rank: 1 },
    { name: "Amy", ID: 3, score: "39", rank: 21 },
    { name: "Lisa", ID: 3, score: "78", rank: 8 },
];

let studentsFullInfo = Array.prototype.map.call(students, function (student) {
    return `${student.name}：学号${student.ID}总分${student.score}排名第${student.rank}`;
});

console.log(studentsFullInfo);
// ["Susan：学号1总分90排名第6", "Jackson：学号2总分88排名第7"...]


console.log('------');
let failList = Array.prototype.filter.call(students, function (student) {
    return student.score < 60;
});

console.log(failList);
// [{name : "Bob",ID:3,score:'45',rank:18}, {name : "Amy",ID:3,score:'39',rank:21},]


function foreach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

console.log('------');
const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));
foreach(array1, (element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"