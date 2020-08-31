using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjekatPUSGS.Migrations
{
    public partial class migracija3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CenovnikUsluga",
                table: "Servisi");

            migrationBuilder.DropColumn(
                name: "Filijale",
                table: "Servisi");

            migrationBuilder.DropColumn(
                name: "SpisakVozila",
                table: "Servisi");

            migrationBuilder.DropColumn(
                name: "BrojILokacijePresedanja",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "CenovnikIInfoOPrtljagu",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "Destinacije",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "EmailAdresa",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "IdKorisnik",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Lozinka",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "GodinaProizvodnje",
                table: "Vozila",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdFilijale",
                table: "Vozila",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "IdServisa",
                table: "Vozila",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "Ocena",
                table: "Vozila",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "RentacarServisIdServis",
                table: "Vozila",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "RowVersion",
                table: "Vozila",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ZauzetiDatumiString",
                table: "Vozila",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Admin",
                table: "Servisi",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Ocena",
                table: "Servisi",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<bool>(
                name: "Odobreno",
                table: "Servisi",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<double>(
                name: "cenaPrviDan",
                table: "Servisi",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "cenaSledeciDan",
                table: "Servisi",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AlterColumn<string>(
                name: "VremePutovanja",
                table: "Let",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<string>(
                name: "DuzinaPutovanja",
                table: "Let",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<string>(
                name: "DatumIVremeSletanja",
                table: "Let",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<string>(
                name: "DatumIVremePoletanja",
                table: "Let",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<string>(
                name: "BrojPresedanja",
                table: "Let",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DatumiZazuzeti",
                table: "Let",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdAvioKompanije",
                table: "Let",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "LokacijaPresedanja",
                table: "Let",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NazivDestinacije",
                table: "Let",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "RedVerzija",
                table: "Let",
                rowVersion: true,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Admin",
                table: "Kompanije",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "CenaPrviDan",
                table: "Kompanije",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "CenaSledeciDan",
                table: "Kompanije",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "Cenovnik",
                table: "Kompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DestinacijePoslovanja",
                table: "Kompanije",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InfoPrtljag",
                table: "Kompanije",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Ocena",
                table: "Kompanije",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<bool>(
                name: "Odobreno",
                table: "Kompanije",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IzmenjenaLozinka",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "BrzeRezervacijeLetova",
                columns: table => new
                {
                    IdRez = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdAvioKompanije = table.Column<int>(nullable: false),
                    IdLeta = table.Column<int>(nullable: false),
                    NovaCena = table.Column<double>(nullable: false),
                    PocetnaCena = table.Column<double>(nullable: false),
                    Popust = table.Column<double>(nullable: false),
                    Zavrseno = table.Column<bool>(nullable: false),
                    IdKlijenta = table.Column<string>(nullable: true),
                    PocetniDatum = table.Column<DateTime>(nullable: false),
                    KrajnjiDatum = table.Column<DateTime>(nullable: false),
                    RedVerzija = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrzeRezervacijeLetova", x => x.IdRez);
                });

            migrationBuilder.CreateTable(
                name: "BrzeRezervacijeVozila",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdServisa = table.Column<int>(nullable: false),
                    IdVozila = table.Column<int>(nullable: false),
                    NovaCena = table.Column<double>(nullable: false),
                    PocetnaCena = table.Column<double>(nullable: false),
                    Popust = table.Column<double>(nullable: false),
                    Zavrseno = table.Column<bool>(nullable: false),
                    IdKlijenta = table.Column<string>(nullable: true),
                    PocetniDatum = table.Column<DateTime>(nullable: false),
                    KrajnjiDatum = table.Column<DateTime>(nullable: false),
                    RowVersion = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrzeRezervacijeVozila", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Filijale",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ulica = table.Column<string>(nullable: true),
                    Broj = table.Column<int>(nullable: false),
                    Mesto = table.Column<string>(nullable: true),
                    ServisID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Filijale", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RezervacijeLetova",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdAvioKompanije = table.Column<int>(nullable: false),
                    IdLeta = table.Column<int>(nullable: false),
                    Cena = table.Column<double>(nullable: false),
                    Zavrseno = table.Column<bool>(nullable: false),
                    IdKlijenta = table.Column<string>(nullable: true),
                    PocetniDatum = table.Column<DateTime>(nullable: false),
                    KrajnjiDatum = table.Column<DateTime>(nullable: false),
                    OcenaZaKomapaniju = table.Column<int>(nullable: false),
                    OcenaZaLet = table.Column<int>(nullable: false),
                    DatumiZauzeti = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RezervacijeLetova", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RezervacijeVozila",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdServisa = table.Column<int>(nullable: false),
                    IdVozila = table.Column<int>(nullable: false),
                    Cena = table.Column<double>(nullable: false),
                    Zavrseno = table.Column<bool>(nullable: false),
                    IdKlijenta = table.Column<string>(nullable: true),
                    PocetniDatum = table.Column<DateTime>(nullable: false),
                    KrajnjiDatum = table.Column<DateTime>(nullable: false),
                    OcenaZaServis = table.Column<int>(nullable: false),
                    OcenaZaVozilo = table.Column<int>(nullable: false),
                    ZauzetiDatumiString = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RezervacijeVozila", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Vozila_RentacarServisIdServis",
                table: "Vozila",
                column: "RentacarServisIdServis");

            migrationBuilder.AddForeignKey(
                name: "FK_Vozila_Servisi_RentacarServisIdServis",
                table: "Vozila",
                column: "RentacarServisIdServis",
                principalTable: "Servisi",
                principalColumn: "IdServis",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vozila_Servisi_RentacarServisIdServis",
                table: "Vozila");

            migrationBuilder.DropTable(
                name: "BrzeRezervacijeLetova");

            migrationBuilder.DropTable(
                name: "BrzeRezervacijeVozila");

            migrationBuilder.DropTable(
                name: "Filijale");

            migrationBuilder.DropTable(
                name: "RezervacijeLetova");

            migrationBuilder.DropTable(
                name: "RezervacijeVozila");

            migrationBuilder.DropIndex(
                name: "IX_Vozila_RentacarServisIdServis",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "IdFilijale",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "IdServisa",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "Ocena",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "RentacarServisIdServis",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "RowVersion",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "ZauzetiDatumiString",
                table: "Vozila");

            migrationBuilder.DropColumn(
                name: "Admin",
                table: "Servisi");

            migrationBuilder.DropColumn(
                name: "Ocena",
                table: "Servisi");

            migrationBuilder.DropColumn(
                name: "Odobreno",
                table: "Servisi");

            migrationBuilder.DropColumn(
                name: "cenaPrviDan",
                table: "Servisi");

            migrationBuilder.DropColumn(
                name: "cenaSledeciDan",
                table: "Servisi");

            migrationBuilder.DropColumn(
                name: "BrojPresedanja",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "DatumiZazuzeti",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "IdAvioKompanije",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "LokacijaPresedanja",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "NazivDestinacije",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "RedVerzija",
                table: "Let");

            migrationBuilder.DropColumn(
                name: "Admin",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "CenaPrviDan",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "CenaSledeciDan",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "Cenovnik",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "DestinacijePoslovanja",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "InfoPrtljag",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "Ocena",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "Odobreno",
                table: "Kompanije");

            migrationBuilder.DropColumn(
                name: "IzmenjenaLozinka",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<string>(
                name: "GodinaProizvodnje",
                table: "Vozila",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<string>(
                name: "CenovnikUsluga",
                table: "Servisi",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Filijale",
                table: "Servisi",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpisakVozila",
                table: "Servisi",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "VremePutovanja",
                table: "Let",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DuzinaPutovanja",
                table: "Let",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DatumIVremeSletanja",
                table: "Let",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DatumIVremePoletanja",
                table: "Let",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BrojILokacijePresedanja",
                table: "Let",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CenovnikIInfoOPrtljagu",
                table: "Kompanije",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Destinacije",
                table: "Kompanije",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmailAdresa",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdKorisnik",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Lozinka",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
