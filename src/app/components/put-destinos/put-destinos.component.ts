import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinosService } from 'src/app/service/destinos.service';

@Component({
  selector: 'app-put-destinos',
  templateUrl: './put-destinos.component.html',
  styleUrls: ['./put-destinos.component.css']
})

export class PutDestinosComponent {
  updateDestinoForm!: FormGroup;
  id:number=this.activatedRoute.snapshot.params["id"];

  destinos: any = [];

  constructor(private activatedRoute:ActivatedRoute,
    private service:DestinosService,
  private fb: FormBuilder,
  private router: Router){ }

    private ngOnInit(){
      this.updateDestinoForm = this.fb.group({
        id: null,
        idCidade: [null, Validators.required],
        logradouro: [null, Validators.required],
        descricao: [null, Validators.required],
      });

      this.getDestinoById(this.id);
    }

    getDestinoById(id: number){
      this.service.getDestinoById(this.id).subscribe((res)=>{
        console.log(res);
        this.updateDestinoForm.patchValue(res);
      })
    }

    putDestino(){
      this.service.putDestino(this.id, this.updateDestinoForm.value).subscribe((res) => {
        console.log(res);
        //if (res != null){
        //this.router.navigateByUrl("");
        //}
      })
    }
}
