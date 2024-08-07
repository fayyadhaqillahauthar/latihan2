
class Smartphone{
    color: string
    brand: string
    model: string
    isTKDN : boolean

    constructor (color:string,brand:string, model:string){
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.isTKDN= true;
    }

    charging(): void{
        console.log(`Smartphone ${this.model} lagi di cas`);
    }
}

const nokia = new Smartphone(`merah`,`nokia`,`E63`)
// console.log(`nokia`,nokia);

//sub class

// sub class akan menurukan sifat perlihat dari class

class Android extends Smartphone{

 layar:number;

    constructor(color:string, brand:string, model:string,layar:number){
    super(color,brand, model);
    this.layar = layar;

    }
    
    splitSreen(){
     console.log(`split sreen berhasil`);
 }

 showbrand(){
    console.log(`brand handphone ini adalah ${this.brand} dan ukuran $ {this.layar}`);
 }


}
const xiaomi = new Android("black", "xiaomi", "redmi",6);
console.log('spesifikasi hp',xiaomi);
xiaomi.splitSreen()
xiaomi.showbrand()

class Ios extends Smartphone{
    airDrop(){
        console.log(`air drop berhasil`);
    }
}

