using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Crisp.Repository.Migrations
{
    public partial class ChangeCategoryIdTypeToGuid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // migrationBuilder.AlterColumn<Guid>(
            //     name: "Id",
            //     table: "Categories",
            //     type: "uniqueidentifier",
            //     nullable: false,
            //     oldClrType: typeof(int),
            //     oldType: "int")
            //     .OldAnnotation("SqlServer:Identity", "1, 1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // migrationBuilder.AlterColumn<int>(
            //     name: "Id",
            //     table: "Categories",
            //     type: "int",
            //     nullable: false,
            //     oldClrType: typeof(Guid),
            //     oldType: "uniqueidentifier")
            //     .Annotation("SqlServer:Identity", "1, 1");
        }
    }
}
