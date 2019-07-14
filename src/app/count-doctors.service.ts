import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CountDoctorsService {
  constructor() {}
  countDoctors(arr) {
    return arr.length;
  }
}
