import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../classes/Offer';
import { Company } from '../classes/Company';


@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  private baseUrl = 'http://localhost:8000/api';
  private baseUrlImages = 'http://localhost:8000';

  constructor(private http: HttpClient) { }


  getOffers(): Observable<Offer[]> {
    const url = this.baseUrl + '/offers';
    return this.http.get<Offer[]>(url);
  }

  getOfferById(id: number): Observable<Offer> {
    const url = this.baseUrl + '/offers?id=' + id;
    return this.http.get<Offer>(url);
  }

  getCompanies(args?: any): Observable<Company[]> {
    const url = this.baseUrl + '/companies';

    if (args)
      return this.http.get<Company[]>(url, { params: args });
    return this.http.get<Company[]>(url);
  }

  getCompanyById(id: number): Observable<Company> {
    const url = this.baseUrl + '/companies?id=' + id;
    return this.http.get<Company>(url);
  }

  getImage(fileName: string): Observable<Blob> {
    const url = this.baseUrlImages + fileName;
    return this.http.get(url, { responseType: 'blob' });
  }

  authenticate(email: string, password: string): Observable<any> {
    const url = this.baseUrl + '/login/';
    return this.http.post(url, { email, password });
  }
}
