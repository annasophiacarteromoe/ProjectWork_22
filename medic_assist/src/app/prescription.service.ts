import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Prescription } from './prescription.type';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private host: string = 'localhost';
  private port: number = 3000;
  private rootUrl = `http://${this.host}:${this.port}/cards`

  constructor(private http : HttpClient) { }
}
