using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjekatPUSGS.Migrations
{
    public partial class vozilo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Korisnici",
                columns: table => new
                {
                    IdKorisnik = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(nullable: true),
                    Prezime = table.Column<string>(nullable: true),
                    EmailAdresa = table.Column<string>(nullable: true),
                    Lozinka = table.Column<string>(nullable: true),
                    Grad = table.Column<string>(nullable: true),
                    BrojTelefona = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Korisnici", x => x.IdKorisnik);
                });

            migrationBuilder.CreateTable(
                name: "Servisi",
                columns: table => new
                {
                    IdServis = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(nullable: true),
                    Adresa = table.Column<string>(nullable: true),
                    PromotivniOpis = table.Column<string>(nullable: true),
                    CenovnikUsluga = table.Column<string>(nullable: true),
                    SpisakVozila = table.Column<string>(nullable: true),
                    Filijale = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Servisi", x => x.IdServis);
                });

            migrationBuilder.CreateTable(
                name: "Vozila",
                columns: table => new
                {
                    IdVozilo = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(nullable: true),
                    Marka = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    GodinaProizvodnje = table.Column<string>(nullable: true),
                    BrojSedista = table.Column<int>(nullable: false),
                    TipVozila = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vozila", x => x.IdVozilo);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Korisnici");

            migrationBuilder.DropTable(
                name: "Servisi");

            migrationBuilder.DropTable(
                name: "Vozila");
        }
    }
}
