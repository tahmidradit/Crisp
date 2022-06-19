using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Crisp.Repository.Migrations
{
    public partial class AddCardExpiryYear : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ExpiryYear",
                table: "Cards",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExpiryYear",
                table: "Cards");
        }
    }
}
