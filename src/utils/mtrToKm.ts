export function mtrToKm(visibilityInMtrs : number ):string{
    const visibilityInKms = visibilityInMtrs / 1000;
    return `${visibilityInKms.toFixed(0)}km` // round to 0 decimal place and added km to it
}