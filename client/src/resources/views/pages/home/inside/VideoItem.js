import { Button, Card, Image } from "react-bootstrap"
import { Row, Col } from 'antd'
import Typography from '@mui/material/Typography';
import { memo } from 'react'
import { Link } from "react-router-dom";
import style from '../../../../styles/VideoItem.module.scss'

function VideoItem(props) {
    return (
        <Col className={style.box}>
            <Card className='p-0'>
                <Link to={`/watch/${props.videoId}`}>
                    <Card.Img variant="top" className={`img-fluid align-middle mx-auto ${style.thumbnail}`}
                        src={`https://i.ytimg.com/vi/${props.videoId}/hq720.jpg`}
                    />
                </Link>
                <Card.Body as={Row} className={`card-body ${style.cardBody}`}>
                    <Col span={4}>
                        <Image className={style.icon}
                            src={`https://yt3.ggpht.com/ytc/${props.channelAvatar}=s48`}
                        ></Image>
                    </Col>
                    <Col span={20}>
                        <Link to={`/watch`} style={{ textDecoration: 'none', color: '#0f0f0f' }}>
                            <Row className="text-start">
                                <Typography variant="inherit" noWrap>
                                    {props.name}
                                </Typography>
                            </Row>
                            <Row className="text-start"><p className={`mb-0 p-0 text-wrap ${style.videoDetails}`}>{props.channelName}</p></Row>
                            <Row className="text-start fl">
                                <p className={`mb-0 p-0 text-wrap ${style.videoDetails}`}>{props.view}</p>
                                <p className={`mb-0 p-0 text-wrap ${style.videoDetails}`}>{props.status}</p>
                            </Row>
                        </Link>
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default memo(VideoItem)