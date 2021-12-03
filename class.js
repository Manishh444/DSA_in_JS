// class emp {
//     constructor(n){
//         // console.log('emp constr called..');
//         this.name = n;
//     }
//     msg(){
//         console.log("hi");
//     }
// }

// class manager extends emp {
//    constructor(p,d){
//        super(p);
//        this.department = d;
//    }
// }

// let mng1 = new manager("manish", 'sw');
// console.log(mng1.msg);
// mng1.msg()

// console.log(mng1);

// class janitor{
//     constructor(){

//     }
// }
// let janitor1 = new janitor();
// console.log(janitor1);























// // class Parson{
// //     constructor(n,a){
// //         this.name = n;
// //         this.age = a
// //     }
// //     sayHi(){
// //         console.log("hi...");
// //     }


// // }

// // let person1 = new Parson();
// // person1.sayHi();
// //  console.log(person1);


class emp{
    #name ="";
    constructor(n){
        this.#name = n;
    }
    
    getName()
    {
    console.log("this is getName output:=>", this.#name);
    }
}

let Emp1 = new emp("Manish");
Emp1.getName();
console.log(Emp1.name); 