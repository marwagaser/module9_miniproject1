import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CountPatientsService {
  constructor() {}
  countPatients(arr) {
    return arr.length;
  }
}
