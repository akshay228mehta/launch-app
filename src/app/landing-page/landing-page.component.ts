import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing-page.template.html',
    styleUrls: ['./landing-page.style.css']
})

export class LandingPageComponent implements OnInit {

    launchData = [];

    constructor(private _fetchDataService: FetchDataService) {

    }

    ngOnInit() {
        this.getLaunchData();
    }

    getLaunchData(){
        this._fetchDataService.getLaunchDataBSubject().subscribe((data) => {
            this._fetchDataService.getLaunchData(data).subscribe((res) => {
                this.launchData = res;
            });
        })
    }

    
}