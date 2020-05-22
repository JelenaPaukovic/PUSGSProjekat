using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjekatPUSGS.Migrations
{
    public partial class migracija2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kompanije",
                columns: table => new
                {
                    IdAvio = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(nullable: true),
                    Adresa = table.Column<string>(nullable: true),
                    PromotivniOpis = table.Column<string>(nullable: true),
                    Destinacije = table.Column<string>(nullable: true),
                    Letovi = table.Column<string>(nullable: true),
                    SpisakKarataSaPopustom = table.Column<string>(nullable: true),
                    KonfSegmenataIMesta = table.Column<string>(nullable: true),
                    CenovnikIInfoOPrtljagu = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kompanije", x => x.IdAvio);
                });

            migrationBuilder.CreateTable(
                name: "Let",
                columns: table => new
                {
                    IdLet = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DatumIVremePoletanja = table.Column<DateTime>(nullable: false),
                    DatumIVremeSletanja = table.Column<DateTime>(nullable: false),
                    VremePutovanja = table.Column<DateTime>(nullable: false),
                    DuzinaPutovanja = table.Column<DateTime>(nullable: false),
                    BrojILokacijePresedanja = table.Column<string>(nullable: true),
                    CenaKarte = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Let", x => x.IdLet);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kompanije");

            migrationBuilder.DropTable(
                name: "Let");
        }
    }
}
