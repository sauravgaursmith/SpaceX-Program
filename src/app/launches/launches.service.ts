import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Filters, Program } from "./interfaces";

@Injectable()
export class LaunchesService {

  // Filter Subject to emit change in filters
  private filtersSub: Subject<Filters> = new Subject<Filters>();
  // Base URL getting space programs list
  private launcherUrl: string = "https://api.spacexdata.com/v3/launches?limit=100";

  constructor(private http: HttpClient) { }

  public refreshFilters(filters: Filters): void {
    this.filtersSub.next(filters);
  }

  public filters(): Subject<Filters> {
    return this.filtersSub;
  }

  /**
   * programs
   * Returns an observable of HTTP Response (Containing space programs list)
   * @param filters
   */
  public programs(filters: Filters): Observable<any> {
    const url = this.prepareUrl(filters);
    return this.http.get(url);
  }

  /**
   * prepareUrl
   * Appends Filters queries in the base URL and returns the same.
   * @param filters
   */
  private prepareUrl(filters: Filters): string {
    const queries: string[] = [];
    if (filters && Object.keys(filters).length) {
      for (const key in filters) {
        if (filters.hasOwnProperty(key) && (filters[key] || typeof filters[key] === "boolean")) {
          queries.push(`${key}=${filters[key]}`);
        }
      }
    }
    const queryStr = queries.join("&");
    return queryStr ? `${this.launcherUrl}&${queryStr}` : this.launcherUrl;
  }
}