using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjekatPUSGS.Migrations
{
    public partial class migracija4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BrojTelefona",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "Telefon",
                table: "AspNetUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Telefon",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "BrojTelefona",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
