import { useState, useEffect } from 'react';

function useFetchWeather() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const lat = 37.291;
    const lon = 127.009;
    const apiKey = "60902411fe4f8c8613132eae955861d0";

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
                if (response.ok) {
                    const data = await response.json();
                    setData(data);
                    setLoading(false);
                } else {
                    throw response;
                }
            } catch (error) {
                setLoading(false);
                console.log('error' + error);
            }
        })();
    }, [lat, lon, apiKey]);

    return { data, loading };
}

export default useFetchWeather;
