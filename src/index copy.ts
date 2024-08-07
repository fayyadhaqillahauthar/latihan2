// // let age : number = 12345
// // let nama : string ='12345'

// // let siswa: {
// //     nama: string;
// //     umur: number;
// //     isPelajar: boolean;
// //     alamat?: string
// // } = {
// //     nama: "faizal",
// //     umur: 17,
// //     isPelajar: false,
// //     alamat : "jakarta"
// // };

// // siswa = {
// //     nama: "akbar",
// //     umur: 18,
// //     isPelajar: true,
// // };


// // // interface untuk mendefinisikan tipe Object 

// // interface produk {
// //     id : number
// //     name : string
// //     price : number
// //     note? : string
// //     isPremium : boolean
// // }


// // const produk1 : produk = {
// //     id : 1,
// //     name : 'hp',
// //     price : 40000,
// //     isPremium : false
// // }
// // const produk2 : produk = {
// //     id : 2,
// //     name : 'TV',
// //     price : 60000,
// //     isPremium : false,
// //     note : 'kerja bagus!'
// // }

// // //Nested Object

// // interface ProdukDetail {
// //     manufacture : string,
// //     year : number
// // }

// // interface produkItem {
// //     id : number
// //     produkName : string
// //     price : number
// //     detail : ProdukDetail
// // }

// // const produk3 : produkItem = {
// //     id : 1,
// //     produkName : "mobil",
// //     price : 10000000,
// //     detail : {
// //         year : 2024,
// //         manufacture: "toyota"
// //     }
// // }


// // console.log('pabrik', produk3.detail.manufacture)
// // console.log('pabrik', produk3.detail)


// // // array

// // const a = [1,2,3,4,5]

// // // square bracket

// // let b : number[]
// // b = [1,2,3,4,5]

// // let c : string[]
// // c = ['faris', 'akbar', 'faisal',]

// // let d : (string | number | boolean)[]
// // d = [1, 'satu', 2]


// // let e  : {nama: string; umur: number}[] = [
// //     {nama: 'akbar', umur:17},
// //     {nama: 'nur', umur:17},
// // ];


// // // interface status {
// // // isSekolah boolan;
// // //}
// // // [];

// // // interface dari{
// // // nama: string;
// // // alama: string;
// // // umur: number;
// // // status: status;
// // // }
// // // [];

// // //let namaj :(string | number)[]


// // //const balok1 = volumbabalok(10, 2, 3);

// // //const balok2 = valumbakbalok(10, 2 1);
// // //const.log(balok1);

// // // function hitunggvolumbebelok(panjang : number, lebar, : number, tinggi, : number) {
// // // const balok = panjang *lebar * tinggi;
// // // return balok
// // // }
// // interface satuInterface{
// //     a:string;
// //     b:string;
// // }

// // function pembagian({a, b, c=1}: {a:number, b: number, c?: number}) {
// //     const hasil = (a / b)* c;
// //     return hasil
// // } 


// // const kali1 = pembagian({a:5, b: 10, c: 2});
// // const kali2 = pembagian({a: 5, b:10});

// // console.log("kali1", kali1)
// // console.log("kali2", kali2);





// // interface ReponseAPI{
// //     msg: string;
// //     status:string;
// // }

// // function empat({a, b}: satuInterface):ReponseAPI {
// //     return {
// //         msg:"hasil1",
// //         status:"ok",
// //     };
// // }

// // function ilma () :ReponseAPI {
// //     return{
// //         msg:"berbayar",
// //         status:"lycaon",
// //     }
// // }
// // // soal

// // // interface satuInterface {
// // //  a: string
// // //  b: string
// // // }

// // // const checkNumberInArray = (array: number[], number: number): boolean => {
// // //     for (let i = 0; i < array.length; i++) {
// // //         if (array[i] === number) {
// // //             return true;
// // //         }
// // //     }
// // //     return false;
// // // };

// // // // Contoh penggunaan:
// // // const arr = [1, 2, 3, 4, 5];
// // // const num = 3;

// // // const result = checkNumberInArray(arr, num);
// // // console.log(result); // Output: true

// // // class user {
// // //     id:number
// // //     fristname : string
// // //     lastname : string
// // //     constructor(id:number,fristname:string,lastname:string){
// // //        (this.id = id,)
// // //         (this.fristname = fristname,)
// // //         (this.lastname = lastname)
// // //     }

// // //     login() : boolean {
// // //         if (this.id ===1){
// // //             return true;
// // //         } else{
// // //             return false
// // //         }
// // //     }

// // //     rellogin() :boolean {
// // //         return this.login()
// // //     }
// // // }

// // // const ihsan = new user(2,"ihsan","san");
// // // const abqory = new user(2,"ab","qory");

// // // console.log(abqory.login());
// // // console.log(ihsan.login());

// // // console.log("ihsa",ihsan);
// // // console.log("an",abqory);

// // // soal 2

// // class profil{
// //     user:{
// //     id : string
// //     password : string

// //     }[]
  
// //   constructor (){
// //     this.user = [{
// //         id : 'faris',
// //         password : '12345'
// //     },
// //     {
// //         id : 'akbar',
// //         password : '123456'
// //     },
// //     {
// //         id : 'faisal',
// //         password : '1234567'
// //     },
// //     {
// //         id : 'fikri',
// //         password : '12345678'
// //     }
// //     ]
// //   }
// // }

// // sub class merupakan turuan dari class baik itu property maupun method

// class smartphone{
//     color: string
//     brand: string
//     model: string

//     constructor (color:string,brand:string, model:string){
//         this.color = color;
//         this.brand = brand;
//         this.model = model;
//         this.isTION = true;
//     }

//     charging(): void{
//         console.log(`smartphone` $ (this.model)`lagi di cas`);
//     }
// }

    







