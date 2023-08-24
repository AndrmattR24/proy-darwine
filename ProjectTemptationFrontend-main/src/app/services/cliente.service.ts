import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, of, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { ICategoria } from "../interfaces/ICategoria";
import { ICliente } from "../interfaces/ICliente";


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl: string;
  private token?: string;


  constructor(private http: HttpClient) {

    this.apiUrl = environment.endpoint + 'api/Cliente';

  }


  getCliente(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(`${this.apiUrl}`);
  }
  createCliente(cliente: ICliente): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }


  deleteCliente(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  updateCliente(id: number, cliente: ICliente): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, cliente);
  }
}
