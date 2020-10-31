let value;

const value1=10;
const value2=4;
//Aritmetik operatörler

// value = value1+value2;
// value = value1-value2;
// value = value1*value2;
// value = value1/value2;
// value = value1%value2;

//Math Objesi
value=Math.PI;
value=Math.E;

value=Math.round(3.6);
value=Math.round(3.5);
value=Math.round(3.2);

value=Math.ceil(3.2);//yukarı yuvarlar her zaman
value=Math.ceil(3.7);


value=Math.floor(3.2);//Aşağı yuvarlar her zaman

value=Math.sqrt(16);//karekök alır

value=Math.abs(-10);//mutlak değer işlemlerinde de kullanabiliriz

value=Math.pow(8,3);//üs alma işleminde kullanırız 8 in 3. kuvvetini aldık örnek olarak

value=Math.max(10,-1,100,32);
value=Math.min(10,-1,100,32);

value=Math.random();//0ile1 arasında bir sayı üretecek sıfır dahil 1 dahil değildir
value=Math.random()*20;//0 ile 20 arasında değer üretecek
value=Math.random()*20+1;//1 ile 21 arasında değer üretecek
value=Math.floor(Math.random()*20+1);

console.log(value);