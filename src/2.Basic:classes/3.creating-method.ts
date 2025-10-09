export class MapPin {
    lat:number;
    lng:number;

    constructor(){
    }

    relocate(lat:number,lng:number){
        this.lat = lat;
        this.lng = lng;
    }
}


const pin = new MapPin();
pin.relocate(20,30);