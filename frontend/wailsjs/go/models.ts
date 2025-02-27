export namespace model {
	
	export class CreateJobParams {
	    name: string;
	    hourlyWage: number;
	
	    static createFrom(source: any = {}) {
	        return new CreateJobParams(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.hourlyWage = source["hourlyWage"];
	    }
	}
	export class CreateRecordParams {
	    // Go type: time
	    startedAt: any;
	    // Go type: time
	    endedAt?: any;
	    note: string;
	    workTime: number;
	    jobId: number;
	
	    static createFrom(source: any = {}) {
	        return new CreateRecordParams(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.startedAt = this.convertValues(source["startedAt"], null);
	        this.endedAt = this.convertValues(source["endedAt"], null);
	        this.note = source["note"];
	        this.workTime = source["workTime"];
	        this.jobId = source["jobId"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Job {
	    id: number;
	    name: string;
	    hourlyWage: number;
	
	    static createFrom(source: any = {}) {
	        return new Job(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.hourlyWage = source["hourlyWage"];
	    }
	}
	export class Record {
	    id: number;
	    // Go type: time
	    startedAt: any;
	    // Go type: time
	    endedAt?: any;
	    note: string;
	    workTime: number;
	    jobId: number;
	
	    static createFrom(source: any = {}) {
	        return new Record(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.startedAt = this.convertValues(source["startedAt"], null);
	        this.endedAt = this.convertValues(source["endedAt"], null);
	        this.note = source["note"];
	        this.workTime = source["workTime"];
	        this.jobId = source["jobId"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class UpdateJobParams {
	    id: number;
	    name: string;
	    hourlyWage: number;
	
	    static createFrom(source: any = {}) {
	        return new UpdateJobParams(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.hourlyWage = source["hourlyWage"];
	    }
	}

}

