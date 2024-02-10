import React from 'react';
import Container from './Container';
import { WeatherIcon } from './WeatherIcon';
import { convertKelvinToCelcius } from '@/utils/convertKelvinToCelcius';
import WeatherDetails, { WeatherDetailsProps } from './WeatherDetails';

export interface ForecastWeatherDetailProps extends WeatherDetailsProps {
    weatherIcon : string;
    date : string;
    day : string;
    temp : number;
    feels_like : number;
    temp_min : number;
    temp_max : number;
    description : string;

}

export default function ForecastWeatherDetail( props : ForecastWeatherDetailProps ){
    const {
        weatherIcon = "02d",
        date = "19.09",
        day = "Tuesday",
        temp = 23,
        feels_like = 22,
        temp_min = 19,
        temp_max = 25,
        description = "Broken Clouds"
    } = props;

    return (
    <Container className='gap-4'>
        <section className='flex gap-4 items-center px-4'>
            <div className='flex flex-col gap-1 items-center'>
                <WeatherIcon iconName={weatherIcon}/>
                <p>{date}</p>
                <p className='text-sm'>{day}</p>
            </div>
            <div className='flex flex-col px-4 space-y-1'>
                <span className='text-5xl'>{convertKelvinToCelcius(temp ?? 0)}°</span>
                <p className='text-xs space-x-1 whitespace-nowrap'>
                <span>Feels like</span>
                <span> {convertKelvinToCelcius(feels_like ?? 0)}°</span>
                </p>
                <p className="text-xs space-x-2">
              <span>{convertKelvinToCelcius(temp_min??0)}°↓{" "}</span>{" "}
              <span>{convertKelvinToCelcius(temp_max??0)}°↑</span>
            </p>
                <p className='capitalize'>{description}</p>
            </div>
        </section>
        <section className='overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10'>
        <WeatherDetails {...props}/>
        </section>
    </Container>
)
}