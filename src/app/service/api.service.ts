import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  goRegister(fd: FormData) {
    return this.http.post('http://192.168.1.28:8000/register/', fd, { observe: 'response' })
  }

}
