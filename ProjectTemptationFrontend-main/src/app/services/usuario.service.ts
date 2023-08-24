import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, of, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { ICategoria } from "../interfaces/ICategoria";
import { IProducto } from "../interfaces/IProducto";
import { IUsuario } from "../interfaces/IUsuario";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl: string;
  private apidel: string;
  private token?: string;
  private apiPost: string;


  constructor(private http: HttpClient) {

    this.apiUrl = environment.endpoint + 'api/Usuario/GetUsuario';
    this.apidel = environment.endpoint + 'api/Usuario/DeleteUsuario';
    this.apiPost = environment.endpoint + 'api/Usuario/PostUsuario/'


  }


  getUsuario(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.apiUrl}`);
  }

  createUsuario(usuario: IUsuario): Observable<any> {
    return this.http.post<any>(this.apiPost, usuario);
  }


  deleteUsuario(id: number): Observable<any> {
    const url = `${this.apidel}/${id}`;
    return this.http.delete<any>(url);
  }

  updateCategoria(id: number, usuario: IUsuario): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, usuario);
  }
}
