import { Component, OnInit } from "@angular/core";
import { Filters } from "../interfaces";
import { LaunchesService } from "../launches.service";

@Component({
  selector: "filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent {
  // Launch Year filter
  public launchYearFilters: any = {
    name: "Launch Year",
    options:  (new Array(15)).fill(0).map((value, index) => {
      return {name: 2006 + index, value: 2006 + index };
    }),
  };
  // Successful Launch Filter
  public successfulLaunchFilters: any = {
    name: "Successful Launch",
    options: [ { name: "True", value: true }, { name: "False", value: false } ],
  };
  // Successful Landing Filter
  public successfulLandingFilters: any = {
    name: "Successful Landing",
    options: [ { name: "True", value: true }, { name: "False", value: false } ],
  };

  public filters: Filters = {
    land_sucess: "",
    launch_success: "",
    launch_year: "",
  }

  constructor(private launchesService: LaunchesService) { }

  public filterSelected($event: MouseEvent, filter: string, value: string | boolean | number): void {
    $event.preventDefault();
    $event.stopPropagation();
    const previousValue = this.filters[filter];
    this.filters[filter] = previousValue !== value ? value : "";
    this.launchesService.refreshFilters(this.filters);
  }

}
