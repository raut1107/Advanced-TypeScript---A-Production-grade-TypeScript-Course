type ServerConfig = {
    apiEndpoint:string,
    privateToken:string,
    debugMode:boolean
}

type PublicConfig = {
    [key in Exclude<keyof ServerConfig, `private${string}`>]:ServerConfig[key]
}