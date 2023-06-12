import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocenteI } from 'src/models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  api_url = 'http://localhost:4000'
  base_path = `${this.api_url}/docentes/`

  constructor(private http: HttpClient) { }

  getAllDocente():Observable<{docente:DocenteI[]}>{
    return this.http.get<{docente: DocenteI[]}>(this.base_path)
  }

  getOneDocente(id: number):Observable<{docente:DocenteI[]}>{
    return this.http.get<{docente: DocenteI[]}>(`${this.base_path}${id}`)
  }

  createDocente(data: DocenteI):Observable<DocenteI>{
    return this.http.post<DocenteI>(this.base_path, data)
  }

  updateDocente(id:number, data: DocenteI):Observable<DocenteI>{
    return this.http.put<DocenteI>(`${this.base_path}${id}`,data)
  }

  deleteDocente(id: number): Observable<DocenteI>{
    return this.http.delete<DocenteI>(`${this.base_path}${id}`)
  }
}
