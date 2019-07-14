import { Component, OnInit } from "@angular/core";
import { CountSumService } from "../count-sum.service";
import { doctor } from "../doctor";
import { patient } from "../patient";
@Component({
  selector: "app-patients-doctors",
  templateUrl: "./patients-doctors.component.html",
  styleUrls: ["./patients-doctors.component.css"]
})
export class PatientsDoctorsComponent implements OnInit {
  total;
  hospitalDoctors: doctor[] = [
    { name: "Dany", specialization: "Allergist" },
    { name: "Barbra", specialization: "Cardiologist" },
    { name: "Michelle", specialization: "Anesthesiologist" },
    { name: "Omnia", specialization: "Medical genetics" },
    { name: "Marwa", specialization: "Diagnostic radiology" }
  ];
  hospitalPatients: patient[] = [
    { name: "Susan", illness: "Allergies" },
    { name: "Palvin", illness: "Alopecia areata" },
    { name: "Michelle", illness: "Arthritis" }
  ];
  constructor(private _cs: CountSumService) {}

  ngOnInit() {
    this.total = this._cs.getSum(this.hospitalDoctors, this.hospitalPatients);
  }
}
