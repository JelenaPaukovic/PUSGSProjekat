export class Korisnik{

   
    ime: string;
    prezime: string
    grad: string;
    brojTelefona: string
    emailAdresa: string
    lozinka: string;
    prijatelji: string;
   

    constructor(ime: string, prezime: string, grad:string, brojTelefona: string,emailAdresa: string, lozinka: string, prijatelji: string){
        this.ime = ime;
        this.prezime = prezime;
        this.grad = grad;
        this.brojTelefona = brojTelefona;
        this.emailAdresa = emailAdresa;
        this.lozinka = lozinka;
        this.prijatelji = prijatelji;
       
    }

}