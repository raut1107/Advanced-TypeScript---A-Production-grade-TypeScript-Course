type Responses = |{result:"success";payload:string}|{result:"failure";errorMsg:string};

function handleResponse(res:Responses):string{
    if(res.result === "success"){
        return `Data: ${res.payload};`
    }
    else if(res.result == "failure"){
        return `Error : ${res.errorMsg}`;
    }

return "";
}