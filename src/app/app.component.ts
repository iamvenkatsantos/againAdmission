import { Component } from "@angular/core";
interface Food {
  value: string;
  viewValue: string;
}
interface Name {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  foods: Food[] = [
    { value: "school", viewValue: "School" },
    { value: "engneeringColleg", viewValue: "Engneering college" },
    { value: "artsCollege", viewValue: "Arts college" },
    { value: "medicalCollege", viewValue: "Medical college" },
    { value: "polytechnicCollege", viewValue: "Polytechnic college" },
    { value: "university", viewValue: "University" },
  ];
  name: Name[] = [
    { value: "venkat", viewValue: "Venkatesh" },
    { value: "hari", viewValue: "Hari Balan" },
  ];
  title = "againAdmission";
  panelOpenState = true;
}
