//Değişken oluşturma

// var a=20;
// var b=10;
// var c=40;
// console.log(a,b,c);

// console.log("Merhaba");

//2 tip veri tipi vardır 

//1-) Primitive
// var a=10;//number veri tipi
// var b=3.24;
// console.log(typeof a ,typeof b);
//-----------------------------------

//String
// var name="Can";
// console.log(typeof name);
//-----------------------------------

//Boolean
// var a=true;
// var b=false;
// console.log( a,b);
// console.log(typeof a,typeof b);
//----------------------------------

// var a=null;//hiç bir değer taşımaz
// console.log(a);
// console.log(typeof a);
//----------------------------------

//tanımsız, herhangi bir değer verilmemiş
// var a;
// console.log(a);

//---------------------------------
//---------------------------------

//2-) Reference veri tipleri

    // var numbers=[1,2,3,4,5];
    // console.log(numbers);
    // console.log(typeof numbers);
    // console.log(numbers[3]);
    
    var person={
        name:"Hakkı Can",
        age:23
    }
    console.log(person);
    console.log(typeof person);
//--------------------------------
    var date=new Date();
    console.log(date);
    console.log(typeof date);
//--------------------------------

var merhaba=new function(){
    console.log("Merhaba");
}
console.log(merhaba);
console.log(typeof merhaba);
//--------------------------------
