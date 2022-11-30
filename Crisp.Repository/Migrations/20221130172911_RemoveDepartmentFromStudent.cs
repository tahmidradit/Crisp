using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Crisp.Repository.Migrations
{
    /// <inheritdoc />
    public partial class RemoveDepartmentFromStudent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Department",
                table: "Students");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "Students",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
