export function convertWindSpeed(speed:number):string{
    const speedInKmPerHrs=speed*3.6;
    return `${speedInKmPerHrs.toFixed(0)}km/h`
}