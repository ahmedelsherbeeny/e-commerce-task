import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public count:BehaviorSubject<number>=new BehaviorSubject(0);
  constructor() { }
}
