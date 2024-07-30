import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestinosService } from './../../service/destinos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-destinos',
  templateUrl: './post-destinos.component.html',
  styleUrls: ['./post-destinos.component.css']
})
export class PostDestinosComponent {

  postDestinoForm!: FormGroup;

  constructor(private destinoService: DestinosService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(){
    this.postDestinoForm = this.fb.group({
      id: null,
      idCidade: [null, Validators.required],
      logradouro: ['', Validators.required],
      descricao: ['', Validators.required],
      });
    }

    postDestino(){
      console.log(this.postDestinoForm.value);
      this.destinoService.postDestinos(this.postDestinoForm.value).subscribe((res)=> {
        console.log(res);
        this.router.navigateByUrl("/")
      }) 
    }
  }


