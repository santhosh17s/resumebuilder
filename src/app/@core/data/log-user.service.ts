import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class LogUser {

    private logInfo = new BehaviorSubject<string>(null);
    currentLogInfo = this.logInfo.asObservable();

    constructor(){   }

    changeLogInfo(logUser) {
        this.logInfo.next(logUser);
    }

}