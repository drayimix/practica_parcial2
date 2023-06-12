import { Component, OnInit } from '@angular/core';
import { DocenteI } from 'src/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-docente',
  templateUrl: './mostrar-docente.component.html',
  styleUrls: ['./mostrar-docente.component.css']
})
export class MostrarDocenteComponent implements OnInit{
  docentes: DocenteI[]=[];
  constructor(
    private docenteService: DocenteService,
    private router: Router,
    private message: MessageService
  ) {

  }

  ngOnInit(): void {
    this.mostrarDocente();
  }

  mostrarDocente(){
    this.docenteService.getAllDocente().subscribe({next: (data)=>{
      this.docentes = data.docente
      console.log(this.docentes)
    }})
  }

  eliminarDocente(id: number){
    this.router.navigateByUrl('/docentes');
    this.docenteService.deleteDocente(id).subscribe(()=>{
      this.message.add({severity:'warn', summary:'Notificacion',detail:'Docente Eliminado',life:5000});
      this.mostrarDocente();
    },
    err => {
      console.log(err);
      console.log('No se ha eliminado correctamente');
    })
  }

}
