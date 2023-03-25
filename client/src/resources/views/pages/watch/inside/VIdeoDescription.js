import style from '../../../../styles/Watch.module.scss';
export default function (props) {
    return (
        <div className={style.videoDescription}>
            <p>{props.value}</p>
            <p onClick={() => { }}>Ẩn bớt</p>
        </div>
    )
}