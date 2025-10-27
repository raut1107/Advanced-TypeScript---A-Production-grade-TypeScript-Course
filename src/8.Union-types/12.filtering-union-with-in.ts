type BookingRes = | {confirmation :{bookingID:string}}| {error:string}


const processBookingResponse = (Response :BookingRes):string =>{
    if("confirmation" in Response){
      return Response.confirmation.bookingID ; 
    }
    else {
        throw new Error(Response.error);
    }
}