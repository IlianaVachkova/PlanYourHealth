import { Injectable }     from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions  } from '@angular/http';
import { FoodAdditive } from './additive.model';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AdditiveService {
  private additivesUrl = '../data/foodAdditivies.json';
  constructor (private http: Http) {}
  getAdditives (): Observable<FoodAdditive[]> {
    return this.http.get(this.additivesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getAdditiveById(id: string) : Promise<FoodAdditive>{   
    return this.http.get(this.additivesUrl)
      .map(this.extractData)
      .toPromise()    
      .then(ad=>ad.find(a=>a.Id == id))
      .catch(this.handleError);
  }
  
  addAdditive (id: string, name : string, image : string, category: string, quantity : string, ingredients: string, purpose: string, madeBy: string):
   Observable<FoodAdditive> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.additivesUrl, { id, name, image, category, quantity, ingredients,purpose, madeBy }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) : FoodAdditive[]{
    let body = res.json();
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