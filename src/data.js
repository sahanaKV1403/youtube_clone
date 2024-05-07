export const API_KEY='AIzaSyBNYFhABYNBAedTLpm-S5zQYl6oyZ7SA-U';
// youtube API key. 
// An API key is a unique identifier used to connect to, or perform, an API call. API stands for,
// application programming interface. API's are used for software applications to send and receive data.
//https://www.youtube.com/watch?v=Zb1zVeXLUf8 ( video reference)

export const value_converter=(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}
// The Math.floor() method rounds a number DOWN to the nearest integer. eg: 1.6 = 1. this is to convert subscribers,
// or likes to nK or nM.