import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DestinosService } from 'src/app/service/destinos.service';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

export interface DestinosData {
    id: number;
		idCidade : number,
		logradouro : string;
		descricao: string;
		descricaoCidade: string;
		ordem: null;
}

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements AfterViewInit {  
  displayedColumns: string[] =  ['id', 'descricaoCidade', 'logradouro', 'descricao'];
  
  @Input() destinos: DestinosData[] = [];

  dataSource = new MatTableDataSource(this.destinos);

  @ViewChild(MatSort)
  sort!: MatSort;

constructor(private destinoService:DestinosService){
  this.dataSource = new MatTableDataSource(this.destinos);
 }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  
ngOnInit(){
  this.getDestinos();
}

getDestinos(){
  this.destinoService.getDestinos().subscribe((res) => {
    console.log(res);
    this.destinos = res;
  })
}
}
