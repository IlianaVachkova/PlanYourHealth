import { Injectable }     from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions  } from '@angular/http';
import { FoodAdditive } from '../models/additive.model';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AdditiveService {
  private additivesUrl = 'http://localhost:3001/data/additives';
  private additiveUrl = 'http://localhost:3001/data/additive/';
  constructor (private http: Http) {}
  getAdditives (): Observable<FoodAdditive[]> {
    return this.http.get(this.additivesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getAdditiveById(id: string) : Observable<FoodAdditive>{   
    return this.http.get(this.additiveUrl + id)
      .map(res => res.json().result)     
      .catch(this.handleError);
  }
 
  //this only works with server TODO:server side
  addAdditive (name : string, image : string, category: string, quantity : string, purpose: string, madeBy: string, ingredients: String[]) :
   Observable<FoodAdditive> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.additivesUrl, { name, image, category, quantity, purpose, madeBy,ingredients }, options)
                    .map(res=> res.json())
                    .catch(this.handleError);
  }

  private extractData(res: Response) : FoodAdditive[]{
    let body = res.json().result;
    body = body as FoodAdditive[];
    console.log(body);
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}