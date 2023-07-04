import useFetchWeather from '../../../hooks/useFetchWeather';

import classes from './Weather.module.css';

import Sun from '../../UI/icon/Sun'
import Cloud from '../../UI/icon/Cloud';
import CloudSun from '../../UI/icon/CloudSun';
import Rain from '../../UI/icon/Rain';

const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();

const Weather = () => {
    const { data, loading } = useFetchWeather();

    if (loading) return <div>Loading...</div>;
    
    let WeatherIcon;
    switch (data.weather[0].main) {
        case "Clear":
            WeatherIcon = <Sun />;
            break;
        case "Clouds":
            WeatherIcon = <Cloud />;
            break;
        case "Rain":
            WeatherIcon = <Rain />;
            break;
        default:
            WeatherIcon = <CloudSun />;
            break;
    }

    return (
        <div className={classes.weatherContainer}>
            <div className={classes.iconBox}>
                <h3>{month}월{day}일</h3>
                <div>
                    {WeatherIcon}
                </div>
            </div>
            <div className={classes.description}>
                <h4>수원시</h4>
                <hr />
                <p>현재온도: {Math.round(data.main.temp - 275.15)}°C</p>
                <p>최고온도: {Math.round(data.main.temp_max - 275.15)}°C</p>
            </div>
        </div>
    );
};

export default Weather;
