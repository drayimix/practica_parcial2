import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocenteI } from 'src/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit{
  public form:FormGroup = this.formBuilder.group({
    nombreDocente: ['', [Validators.required]],
    tipoVinculacion: ['', [Validators.required]],
    programa: ['', [Validators.required]],
    facultad: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private docenteService: DocenteService,
    private router: Router,
    private message: MessageService
  ) {

  }
  ngOnInit(): void {

  }

  onSubmit(){
    const formValue: DocenteI = this.form.value;
    console.log(formValue);
    this.docenteService.createDocente(formValue).subscribe(()=>{
      setTimeout(()=>{
        this.message.add({severity:'succes', summary:'Notificacion',detail:'Docente Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('docentes');
    },
    err =>{
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    )
  }

  cancel(){
    this.router.navigateByUrl('/docentes');
  }

  get nombreDocente() { return this.form.get('nombreDocente'); }
  get tipoVinculacion() { return this.form.get('tipoVinculacion'); }
  get programa() { return this.form.get('programa'); }
  get facultad() { return this.form.get('facultad'); }
}
