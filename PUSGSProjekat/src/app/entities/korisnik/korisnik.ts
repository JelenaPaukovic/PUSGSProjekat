export class Korisnik{

   
    ime: string;
    prezime: string;
    grad: string;
    telefon: string;
    email: string;
    lozinka: string;
    prijatelji: string;
   

    constructor(ime: string, prezime: string, grad:string, telefon: string,email: string, lozinka: string, prijatelji: string){
        this.ime = ime;
        this.prezime = prezime;
        this.grad = grad;
        this.telefon = telefon;
        this.email = email;
        this.lozinka = lozinka;
        this.prijatelji = prijatelji;
       
    }

}