import Spinner from '../../assets/Spinner.gif';

import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.loadingContainer}>
            <h1>이율곡의 자기소개를 불러오고 있습니다.</h1>
            <img src={Spinner} alt="Spinner" />
        </div>
    );
}

export default Loading;