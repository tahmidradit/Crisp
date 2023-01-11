import { ExportService } from './../../../services/export/export.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent {
  constructor(private exportService: ExportService) {}
data: any;
  exportExcel()  {
    this.exportService.exportExcel();
  }
}
