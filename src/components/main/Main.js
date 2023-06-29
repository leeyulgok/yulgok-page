import myImage from '../../assets/my_photo.JPG';
import classes from './Main.module.css';

import IntroSection from './IntroSection';
import MenuSection from './MenuSection';

const Main = () => {
    return (
        <main>
            <div className={classes.mainImg}>
                <img src={myImage} alt='Profil_Picture'/>
            </div>
            <section className={classes.mainIntroduce}>
                <IntroSection />
                <MenuSection />
            </section>
        </main>
    );
}

export default Main;
