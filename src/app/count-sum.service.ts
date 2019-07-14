import { Injectable } from "@angular/core";
import { CountDoctorsService } from "./count-doctors.service";
import { CountPatientsService } from "./count-patients.service";
@Injectable({
  providedIn: "root"
})
export class CountSumService {
  numberOfPatients;
  numberOfDoctors;
  constructor(
    private _cp: CountPatientsService,
    private _cd: CountDoctorsService
  ) {}
  getSum(arr1, arr2) {
    this.numberOfDoctors = this._cd.countDoctors(arr1);
    this.numberOfPatients = this._cp.countPatients(arr2);
    return this.numberOfDoctors + this.numberOfPatients;
  }
}
