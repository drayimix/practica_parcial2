import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocenteI } from 'src/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { AsignaturaI } from 'src/models/asignatura';

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit{
  asignaturas: AsignaturaI[]=[];
  public form:FormGroup = this.formBuilder.group({
    nombreDocente: ['', [Validators.required]],
    tipoVinculacion: ['', [Validators.required]],
    programa: ['', [Validators.required]],
    facultad: ['', [Validators.required]],
    asignaturaId: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private docenteService: DocenteService,
    private router: Router,
    private message: MessageService
  ) {

  }
  ngOnInit(): void {
    this.getAsignatura();
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

  getAsignatura(){
    this.docenteService.getAllAsignatura().subscribe({next: (data)=>{
      this.asignaturas = data.asignatura
      console.log(this.asignaturas)
    }})
  }

  cancel(){
    this.router.navigateByUrl('/docentes');
  }

  get nombreDocente() { return this.form.get('nombreDocente'); }
  get tipoVinculacion() { return this.form.get('tipoVinculacion'); }
  get programa() { return this.form.get('programa'); }
  get facultad() { return this.form.get('facultad'); }
  get asignaturaId() { return this.form.get('asignaturaId'); }
}
