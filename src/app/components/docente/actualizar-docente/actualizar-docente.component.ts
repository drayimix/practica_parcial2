import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DocenteI } from 'src/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { AsignaturaI } from 'src/models/asignatura';

@Component({
  selector: 'app-actualizar-docente',
  templateUrl: './actualizar-docente.component.html',
  styleUrls: ['./actualizar-docente.component.css']
})
export class ActualizarDocenteComponent implements OnInit{
  id: number = 0;
  asignaturas: AsignaturaI[]=[];
  public form:FormGroup = this.formBuilder.group({
    id: [''],
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
    private message: MessageService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDocente(this.id);
    this.getAsignatura();
  }

  getDocente(id: number){
    this.docenteService.getOneDocente(id).subscribe({next: (data)=>{
      this.form.setValue(data.docente)
    }})
  }

  getAsignatura(){
    this.docenteService.getAllAsignatura().subscribe({next: (data)=>{
      this.asignaturas = data.asignatura
      console.log(this.asignaturas)
    }})
  }

  onSubmit(){
    const formValue: DocenteI = this.form.value;
    const id: number = this.form.value.id;
    this.docenteService.updateDocente(id, formValue).subscribe(()=>{
      setTimeout(()=>{
        this.message.add({severity: 'success', summary: 'Notificacion',detail: 'Cliente Actualizado', life:5000});
      }, 0);
      this.router.navigateByUrl('docentes');
    })
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
