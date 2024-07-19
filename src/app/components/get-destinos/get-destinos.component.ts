import { Observable } from 'rxjs';
import { DestinosService } from './../../service/destinos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-destinos',
  templateUrl: './get-destinos.component.html',
  styleUrls: ['./get-destinos.component.css']
})
export class GetDestinosComponent {

  destinos: any = [];

  cidades: any = []

constructor(private destinoService:DestinosService){ }

ngOnInit(){
  this.getDestinos();
}

getDestinos(){
  this.destinoService.getDestinos().subscribe((res) => {
    console.log(res);
    this.destinos = res;
  })
}

deleteDestinos(idDestino: number){
  this.destinoService.deleteDestino(idDestino).subscribe((res) => {
    console.log(res);
  })
}

}
