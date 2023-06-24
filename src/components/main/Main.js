import myImage from '../../assets/my_photo.JPG';
import classes from './Main.module.css';

const Main = () => {
    return (
        <main>
            <section className={classes["main-img"]}>
                <img src={myImage} alt='myImage'/>
            </section>
            <section className={classes["main-introduce"]}>
                <div className={classes["intro-container"]}>
                    <h1>Hello</h1>
                    <h4>나를 소개할게.</h4>
                    <p>나는 이율곡이고 앞으로 하고 싶은게 많아.</p>
                </div>
                <div className={classes["intro-menu-container"]}>
                    <button className={classes["intro-menu1"]}>Resume</button>
                    <button className={classes["intro-menu2"]}>Projects</button>
                    <button className={classes["intro-menu3"]}>Contact</button>
                </div>
            </section>
        </main>
    );
}

export default Main;