import { memo, useState, useEffect } from 'react'
import { Col, Divider, Row } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import style from '../../../../styles/Watch.module.scss'
import classNames from 'classnames/bind'
import axios from 'axios'
import { Link } from 'react-router-dom';
function WatchVideoListSidebar(props) {
    const cx = classNames.bind(style)
    const [img, setImg] = useState()
    useEffect(() => {
        axios.get(`http://localhost:5000/api/file/image/${props.link}`, { responseType: 'blob' })
            .then(res => {
                var binaryData = [];
                binaryData.push(res.data);
                setImg(window.URL.createObjectURL(new Blob(binaryData, { type: "image/jpeg" })));
            })
    }, [])
    return (
        <Link to={`/watch/${props.link}`}>
            <div className={cx('list-video-deeper')}>
                <Row className={cx('sidebar-list-box')}>
                    <Col span={7} className={cx('sidebar-list-item-col-1')}>
                        <img className={cx('sidebar-list-img')} src={img} />
                    </Col>
                    <Col span={16} className={cx('sidebar-list-item-col-2')}>
                        <Row className={cx('sidebar-list-title-box')}>
                            <p className={cx('sidebar-list-title')}>{props.title}</p>
                        </Row>
                        <Row className={cx('sidebar-list-channel-name-box')}>
                            <p className={cx('sidebar-list-channel0name')}>{props.channelName}</p>
                        </Row>
                    </Col>
                    <Col span={1} className={cx('sidebar-list-item-col-3')}>
                        <SettingOutlined />
                    </Col>
                </Row>
                <Divider style={{ margin: '10px 0' }} />
            </div>
        </Link>
    )
}

export default memo(WatchVideoListSidebar)