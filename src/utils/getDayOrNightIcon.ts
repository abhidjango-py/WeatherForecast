export function getDayOrNightIcon(iconName:string, dateTimeString:string):string {
    const hours = new Date(dateTimeString).getHours(); //get hours for given date andd time

    const isDayTime = hours >= 6 && hours<18; //daytime from 6am to 6pm
    return isDayTime ? iconName.replace(/.$/,"d") : iconName.replace(/.$/,"n");
}