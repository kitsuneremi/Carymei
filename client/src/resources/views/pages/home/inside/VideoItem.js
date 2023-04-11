import { Button, Card, Image } from "react-bootstrap"
import { Row, Col } from 'antd'
import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import style from '../../../../styles/VideoItem.module.scss'
import axios from "axios"
import classNames from "classnames/bind";
function VideoItem(props) {
    const cx = classNames.bind(style)
    const [img, setImg] = useState()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/file/image/${props.link}`, {responseType: 'blob'})
        .then(res => {
            var binaryData = [];
            binaryData.push(res.data);
            setImg(window.URL.createObjectURL(new Blob(binaryData, {type: "image/jpeg"})));
        })
    },[])

    return (
        <Col className={cx('box')}>
            <Card className='p-0'>
                <Link to={`/watch/${props.link}`}>
                    <Card.Img variant="top" className={`img-fluid align-middle mx-auto ${cx('thumbnail')}`}
                        src={img}
                    />
                </Link>
                <Card.Body as={Row} className={`card-body ${cx('card-body')}`}>
                    <Col span={4}>
                        <Image className={cx('icon')}
                            src={``}
                        ></Image>
                    </Col>
                    <Col span={20}>
                        <Link to={`/watch/${props.link}`} style={{ textDecoration: 'none', color: '#0f0f0f' }}>
                            <Row className="text-start">
                                <Typography variant="inherit" noWrap>
                                    {props.name}
                                </Typography>
                            </Row>
                            <Row className="text-start"><p className={`mb-0 p-0 text-wrap ${cx('video-details')}`}>{props.channelName}</p></Row>
                            <Row className="text-start fl">
                                <p className={`mb-0 p-0 text-wrap ${cx('video-details')}`}>{props.view}</p>
                                <p className={`mb-0 p-0 text-wrap ${cx('video-details')}`}>{props.status}</p>
                            </Row>
                        </Link>
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default memo(VideoItem)