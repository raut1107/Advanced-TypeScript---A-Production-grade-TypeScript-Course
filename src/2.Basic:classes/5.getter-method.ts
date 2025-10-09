export class MapPin {
    lat;
    lng;

    constructor(location?:{lat:number;lng:number}){
        this.lat = location?.lat ?? 0;
        this.lng = location?.lng ?? 0;
    }

  get  coordinates(){
        return{
            lat:this.lat,
            lng:this.lng
        }
    }
}


const pin = new MapPin({lat:10,lng:20});

let lat = pin.coordinates.lat;
let lang = pin.coordinates.lng;
