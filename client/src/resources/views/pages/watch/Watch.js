import { Button, ButtonGroup } from "react-bootstrap"
import classNames from 'classnames/bind'
import { useState, useEffect, useRef, useLayoutEffect, useContext, memo } from "react"
import { Space, Row, Col, Drawer, Collapse as AntCollapse } from "antd";
import {
    CloseOutlined,
    LikeOutlined,
    DislikeFilled,
    ScissorOutlined,
    ArrowRightOutlined,
    SaveOutlined,
    LikeFilled,
    DislikeOutlined
} from '@ant-design/icons';
import PropTypes from "prop-types";
import Context from '../../../../GlobalVariableStorage/Context'
import Item from "../../partials/sidebar/SideBarItem"
import style from '../../../styles/Watch.module.scss';
import { Avatar, Box, Tab, Tabs, Typography } from "@mui/material";
import WatchVideoSidebar from "./inside/VideoSidebar";
import WatchVideoComment from "./inside/VideoComment";
import WatchVideoCommentInput from "./inside/VideoCommentInput";
import WatchVideoListSidebarBox from "./inside/VideoListSidebarBox";
import Navx from "../../partials/navbar/Nav";
import clsx from "clsx";
import VideoDescription from "./inside/VIdeoDescription";
import axios from "axios";
function Watch() {
    const cx = classNames.bind(style)
    //useContext
    const context = useContext(Context)

    //useState
    const [value, setValue] = useState(0)
    const [watchDpHandler, setWatchDpHandler] = useState(false)
    const [maxVideoWidth, setMaxVideoWidth] = useState(17)
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)
    const [sub, SetSub] = useState(false);
    const [video, setVideo] = useState({});
    const [play, setPlay] = useState(true);
    const [volume, setVolume] = useState(100);
    const [fullscreen, setFullscreen] = useState(true);


    //useEffect
    useEffect(() => {
        const handleCollapse = () => {
            context.setFalseShowDrawer()
        }
        window.addEventListener('resize', handleCollapse)
        return () => {
            window.removeEventListener('resize', handleCollapse)
        }
    }, [])

    useEffect(() => {
        const handleCollapse = () => {
            if (window.innerWidth < 1200) {
                setWatchDpHandler(true)
                setMaxVideoWidth(24)
            } else {
                setWatchDpHandler(false)
                setMaxVideoWidth(17)
            }

        }
        window.addEventListener('resize', handleCollapse)
        return () => {
            window.removeEventListener('resize', handleCollapse)
        }
    }, [])

    useEffect(() => {
        if (window.innerWidth < 1200) {
            setWatchDpHandler(true)
            setMaxVideoWidth(24)
        } else {
            setWatchDpHandler(false)
            setMaxVideoWidth(17)
        }
    }, [])

    useLayoutEffect(() => {
        axios.get(`http://localhost:5000/api/video/${window.location.pathname.split('/')[2]}`)
            .then(res => { setVideo(res.data); console.log(res.data) })
    }, [])

    // useEffect(() => {
    //     window.addEventListener('')
    // })

    //useRef
    const playerRef = useRef();

    //vô tổ chức
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    //function
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const thisIsDrawer = () => {
        if (context.drawerstatus) {
            let drawer = <Drawer
                title="Basic Drawer"
                placement='left'
                closable={true}
                closeIcon={true}
                width={200}
                onClose={() => {
                    context.setFalseShowDrawer();
                }}
                open={context.drawerstatus}
                extra={
                    <Space>
                        <CloseOutlined onClick={() => { context.setFalseShowDrawer(); }} />
                    </Space>
                }
                className={clsx(
                    { [style.dark]: !context.mode },
                    { [style.light]: context.mode }
                )}

            >
                <Item show={true}></Item>
            </Drawer>;
            return drawer
        } else {
            return (
                <></>
            )
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLike = () => {
        return (
            <ButtonGroup className={style.likeButtonGroup}>
                <Button className={style.likeButton} onClick={() => { setLike(!like); setDislike(false) }}>
                    {like ? <LikeFilled /> : <LikeOutlined />}
                </Button>
                <Button className={style.dislikeButton} onClick={() => { setDislike(!dislike); setLike(false) }}>
                    {dislike ? <DislikeFilled /> : <DislikeOutlined />}
                </Button>
            </ButtonGroup>
        )
    }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const handleSubscribe = () => {
        SetSub(!sub)
    }

    const volumn = () => {
        if (volumn > 50) {
            return (
                <span class="material-icons">
                    volume_up
                </span>
            )
        } else if (volume > 0) {
            return (
                <span class="material-icons">
                    volume_down
                </span>
            )
        } else {
            return (
                <span class="material-icons">
                    volume_mute
                </span>
            )
        }
    }

    return (
        <div className="App" style={{ overflow: 'hidden' }}>
            <Navx />

            {/*sidebar*/}
            {thisIsDrawer()}



            {/*content*/}
            {Object.keys(video).length === 0 ? <div clas>loading...</div> :
                <Row className={`${style.mainContent}`}>
                    <Col span={maxVideoWidth} style={{ height: 'inherit' }}>
                        <div className={cx('video-box')}>
                            {/* <iframe id="videoplayer" className={`${style.videoPlayer}`} src={`https://www.youtube.com/embed/${video.videoId}`}
                                onCanPlay={e => { e.currentTarget.play() }}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                ref={playerRef}
                            >
                            </iframe> */}
                            <div className={cx('timeline')}>

                            </div>
                            <div className={cx('video-player')}>
                                {/* <video src={`https://www.youtube.com/embed/${video.videoId}`}
                                    allowFullScreen
                                    ref={playerRef}
                                ></video> */}
                            </div>

                            <div className={cx('control')}>
                                <div className={cx('left-control')}>
                                    {!play ? <span class="material-icons" onClick={() => setPlay(true)}>
                                        play_arrow
                                    </span> : <span class="material-icons" onClick={() => setPlay(false)}>
                                        pause
                                    </span>}
                                    <span class="material-icons">
                                        skip_next
                                    </span>
                                    {volumn()}
                                </div>
                                <div className={cx('right-control')}>
                                    <span class="material-icons">
                                        subtitles
                                    </span>
                                    <span class="material-icons">
                                        settings
                                    </span>
                                    {fullscreen ? <span class="material-icons" onClick={() => {setFullscreen(false)}}>fullscreen</span> :<span class="material-icons" onClick={() => {setFullscreen(true)}}>fullscreen_exit</span>}
                                </div>
                            </div>

                        </div>
                        <div>
                            <Row>
                                <h5>{video.title}</h5>
                            </Row>
                            <Row style={{ justifyContent: 'space-between' }}>
                                <Col span={10}>
                                    <Row style={{ height: '40px' }}>
                                        <Col className="me-1">
                                            <Avatar />
                                        </Col>
                                        <Col className="me-4">
                                            <Row><p className="m-0">{video.channelName}</p></Row>
                                            <Row><p className="m-0">44.5N</p></Row>
                                        </Col>
                                        <Col className={style.subButton}>
                                            <a type="button" className={`${clsx({ [style.sub]: sub }, { [style.unsub]: !sub })}`}
                                                onClick={() => {
                                                    handleSubscribe()
                                                }}
                                            >
                                                {sub ? 'đăng ký' : 'đã đăng ký'}
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={14} style={{ textAlign: 'end' }} className={style.belowVideoButton}>
                                    {handleLike()}
                                    <a type="button" className={`${style.share}`}><ArrowRightOutlined />share</a>
                                    <a type="button" className={`${style.createShort}`}><ScissorOutlined />tạo đoạn video</a>
                                    <a type="button" className={`${style.save}`}><SaveOutlined />save</a>
                                </Col>
                            </Row>
                        </div>
                        <VideoDescription value={video.des}></VideoDescription>
                        {
                            maxVideoWidth === 17 ?
                                <div>
                                    <WatchVideoCommentInput />
                                    <WatchVideoComment />
                                </div>
                                :
                                <div></div>
                        }
                        <Box sx={{ width: '100%' }} className={clsx(
                            { [style.true]: watchDpHandler },
                            { [style.false]: !watchDpHandler }
                        )}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange}>
                                    <Tab label="Bình luận" {...a11yProps(0)} />
                                    <Tab label="Danh sách phát kết hợp" {...a11yProps(1)} />
                                    <Tab label="Video khác" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <WatchVideoCommentInput />
                                <WatchVideoComment />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <WatchVideoListSidebarBox />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <div className={`mt-3`}>
                                    <Row>
                                        <Button className={`me-1`}>all</Button>
                                        <Button className={`me-1`}>new</Button>
                                        <Button>had view</Button>
                                    </Row>
                                    <WatchVideoSidebar />
                                    <WatchVideoSidebar />
                                    <WatchVideoSidebar />
                                </div>
                            </TabPanel>
                        </Box>
                    </Col>
                    <Col span={maxVideoWidth === 17 ? 1 : 0}></Col>
                    <Col span={maxVideoWidth === 17 ? 6 : 0} style={{ height: 'inherit' }}>
                        {maxVideoWidth === 17 ?
                            <>
                                <WatchVideoListSidebarBox />
                                <div className={`mt-3`}>
                                    <Row>
                                        <Button className={`me-1`}>all</Button>
                                        <Button className={`me-1`}>new</Button>
                                        <Button>had view</Button>
                                    </Row>
                                    <WatchVideoSidebar />
                                    <WatchVideoSidebar />
                                    <WatchVideoSidebar />
                                </div>
                            </>
                            :
                            <div></div>
                        }

                    </Col>
                </Row>
            }
        </div>

    );
}
export default memo(Watch);

