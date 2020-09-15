import { Component, OnInit } from "@angular/core";
import { FetchDataService, LDataQueryParams } from '../services/fetch-data.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.template.html',
    styleUrls: ['./filter.style.css']
})

export class FilterComponent implements OnInit {

    years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

    queryParams = new LDataQueryParams();

    constructor(private _fetchDataService: FetchDataService) { }

    ngOnInit() {
        this._fetchDataService.emitLaunchDataObs(this.queryParams);
    }

    yearSelected(year: number) {
        if(this.queryParams.launchYear != year){
            this.queryParams.launchYear = year;
        }else{
            this.queryParams.launchYear = undefined;
        }
        
        this._fetchDataService.emitLaunchDataObs(this.queryParams);
    }

    successfulLaunchSelected(isSuccessfulLaunch: boolean) {
        if(this.queryParams.launchSuccess != isSuccessfulLaunch){
            this.queryParams.launchSuccess = isSuccessfulLaunch;
        }else{
            this.queryParams.launchSuccess = undefined;
        }
        this._fetchDataService.emitLaunchDataObs(this.queryParams);
    }

    successfulLandSelected(isSuccessfulLand: boolean) {
        if(this.queryParams.landSuccess != isSuccessfulLand){
            this.queryParams.landSuccess = isSuccessfulLand;
        }else{
            this.queryParams.landSuccess = undefined;
        }
        
        this._fetchDataService.emitLaunchDataObs(this.queryParams);
    }
}