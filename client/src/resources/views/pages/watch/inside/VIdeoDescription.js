import style from '../../../../styles/Watch.module.scss';
import classNames from 'classnames/bind'
export default function (props) {
    const cx = classNames.bind(style)
    return (
        <div className={cx('video-description')}>
            <p>{props.value}</p>
            <p onClick={() => { }}>Ẩn bớt</p>
        </div>
    )
}