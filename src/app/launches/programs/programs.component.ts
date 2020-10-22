import { Component, Input } from "@angular/core";
import { Program } from "../interfaces";

@Component({
  selector: "programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.scss"]
})
export class ProgramsComponent {

  @Input() public program: Program;

  constructor() { }

}
