import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FetchDataService {

    beahviorSubject = new BehaviorSubject(new LDataQueryParams());

    constructor(private _httpClient: HttpClient) {

    }

    getLaunchDataBSubject(){
        return this.beahviorSubject;
    }

    emitLaunchDataObs(param: LDataQueryParams){
        this.beahviorSubject.next(param);
    }

    getLaunchData(param: LDataQueryParams): Observable<any> {
        const API_URL = 'https://api.spacexdata.com';

        let params = new HttpParams();

        if (param.limit)
            params = params.append('limit', param.limit.toString());

        if (param.launchSuccess != undefined)
            params = params.append('launch_success', param.launchSuccess.toString());

        if (param.landSuccess != undefined)
            params = params.append('land_success', param.landSuccess.toString());

        if (param.launchYear)
            params = params.append('launch_year', param.launchYear.toString());

        return this._httpClient.get(`${API_URL}/v3/launches`, { params });
    }
}

export class LDataQueryParams{
    limit?:number;
    launchSuccess?:boolean;
    landSuccess?:boolean;
    launchYear?:number;
}