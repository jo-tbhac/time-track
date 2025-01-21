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

