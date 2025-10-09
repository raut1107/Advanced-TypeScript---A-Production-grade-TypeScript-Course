export class MapPin {
    lat;
    lng;

    constructor(location?:{lat:number;lng:number}){
        this.lat = location?.lat ?? 0;
        this.lng = location?.lng ?? 0;
    }

    relocate(lat:number,lng:number){
        this.lat = lat;
        this.lng = lng;
    }
}


const pin = new MapPin({lat:10,lng:20});
pin.relocate(20,30);