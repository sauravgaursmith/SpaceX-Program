import { Component, OnDestroy, OnInit } from "@angular/core";
import { LaunchesService } from "./launches.service";
import { Subscription } from 'rxjs';
import { Program, Filters } from "./interfaces";

@Component({
  selector: "launches",
  templateUrl: "./launches.component.html",
  styleUrls: ["./launches.component.scss"]
})
export class LaunchesComponent implements OnDestroy, OnInit {

  public programs: Program[] = [];
  public showLoader: boolean = false;

  private subscription: Subscription = new Subscription();
  private filters: Filters;

  constructor(private launchesService: LaunchesService) { }

  public ngOnInit(): void {
    this.getPrograms();
    this.subscribeFilters();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getPrograms(): void {
    this.showLoader = true;
    const programSub = this.launchesService.programs(this.filters).subscribe((programs: Program[]) => {
      this.programs = programs;
      this.showLoader = false;
    });
    this.subscription.add(programSub);
  }

  private subscribeFilters(): void {
    const filtersSub = this.launchesService.filters().subscribe((filters: Filters) => {
      this.filters = filters;
      this.getPrograms();
    });
    this.subscription.add(filtersSub);
  }

}
