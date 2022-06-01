export type Weather = {
    main: {
        temp: number;
        feels_like: number;
        pressure: number;
    }
    wind: {
        speed: number;
    }
    weather: {
        description: string
    }
}

export type WeatherWeek = {
    
}