import { Button, ButtonGroup } from "react-bootstrap"
import classNames from 'classnames/bind'
import { useState, useEffect, useRef, useContext, memo } from "react"
import { Space, Row, Col, Drawer, Collapse as AntCollapse } from "antd";
import { CloseOutlined, LikeOutlined, DislikeFilled, ScissorOutlined, ArrowRightOutlined, SaveOutlined, LikeFilled, DislikeOutlined } from '@ant-design/icons';
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
import VideoDescription from "./inside/VideoDescription";
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
    const [fs, setFullscreen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [channelData, setChannelData] = useState(null)
    const [selectedTab, setSelectedTab] = useState(1)
    //useRef
    const playerRef = useRef(null);
    const videoRef = useRef(null);

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


    useEffect(() => {
        let a = window.location.href
        axios
            .get(`http://localhost:5000/api/file/video/${a.split('/')[4]}`, { responseType: "blob" })
            .then((res) => {
                var binaryData = [];
                binaryData.push(res.data);
                setVideo(window.URL.createObjectURL(new Blob(binaryData, { type: "video/mp4" })));
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let a = window.location.href
        axios.get(`http://localhost:5000/api/channel/test/${a.split('/')[4]}`)
            .then(res => setChannelData(res.data))
    }, [])

    useEffect(() => {
        const handleSpacebar = (e) => {
            if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
                e.preventDefault();
                e.target.value += ' ';
                const video = playerRef.current
                if (video.paused) {
                    video.play()
                    setPlay(true)
                } else {
                    video.pause()
                    setPlay(false)
                }
            }
        };

        document.addEventListener('keydown', handleSpacebar);

        return () => {
            document.removeEventListener('keydown', handleSpacebar);
        };
    }, []);



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
            <ButtonGroup className={cx('like-button-group')}>
                <Button className={cx('like-button')} onClick={() => { setLike(!like); setDislike(false) }}>
                    {like ? <LikeFilled /> : <LikeOutlined />}
                </Button>
                <Button className={cx('dislike-button')} onClick={() => { setDislike(!dislike); setLike(false) }}>
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
                <span className="material-icons">
                    volume_up
                </span>
            )
        } else if (volume > 0) {
            return (
                <span className="material-icons">
                    volume_down
                </span>
            )
        } else {
            return (
                <span className="material-icons">
                    volume_mute
                </span>
            )
        }
    }

    const otherVideoRender = () => {
        const viewTab = () => {
            if(selectedTab === 1){
                return <WatchVideoSidebar />
            }else if(selectedTab === 2){
                return <WatchVideoSidebar />
            }else{
                return <WatchVideoSidebar />
            }
        }
        const btn = [
            {
                'title': 'tất cả',
            },
            {
                'title': 'mới',
            },
            {
                'title': 'đã xem',
            }
        ]
        return (
            <div className={cx('sidebar-below')}>
                <div className={cx('top-housing')}>
                    {btn.map((btn, index) => {
                        return (
                            <button className={
                                clsx({[cx('tab-button')]: (selectedTab !== index)},{[cx('selected-tab-button')]: (selectedTab === index)})
                            } onClick={() => { setSelectedTab(index) }}>{btn.title}</button>
                        )
                    })}
                </div>
                <div className={cx('bottom-housing')}>
                    {viewTab()}
                </div>
            </div>
        )
    }



    async function handleCopy() {
        try {
            let a = window.location.href
            await navigator.clipboard.writeText(`https://erinasaiyukii.com/watch/${a.split('/')[4]}`);
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    const handleFullScreen = () => {
        const video = videoRef.current;
        if (fs) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <div className="App" style={{ overflow: 'hidden' }}>
            <Navx />

            {/*sidebar*/}
            {thisIsDrawer()}

            {/*content*/}
            {Object.keys(video).length === 0 || channelData == null ? <div>loading...</div> :
                <Row className={cx('main-content')}>
                    <Col span={maxVideoWidth} style={{ height: 'inherit' }}>
                        <div className={cx('video-box')} ref={videoRef}>
                            <div className={cx('timeline')}>

                            </div>
                            <div className={cx('video-player-box')}>
                                <video
                                    className={cx('video-player')}
                                    src={video}
                                    allowFullScreen
                                    autoPlay
                                    ref={playerRef}
                                ></video>
                            </div>

                            <div className={cx('control')}>
                                <div className={cx('left-control')}>
                                    {
                                        !play ? <span className="material-icons" onClick={() => { playerRef.current.play(); setPlay(true) }}>
                                            play_arrow
                                        </span> : <span className="material-icons" onClick={() => { playerRef.current.pause(); setPlay(false) }}>
                                            pause
                                        </span>
                                    }
                                    <span className="material-icons">
                                        skip_next
                                    </span>
                                    {volumn()}
                                </div>
                                <div className={cx('right-control')}>
                                    <span className="material-icons">
                                        subtitles
                                    </span>
                                    <span className="material-icons">
                                        settings
                                    </span>
                                    {
                                        !fs
                                            ?
                                            <span className="material-icons" onClick={() => { setFullscreen(true); handleFullScreen() }}>fs</span>
                                            :
                                            <span className="material-icons" onClick={() => { setFullscreen(false); handleFullScreen() }}>fs_exit</span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <Row>
                                <h5>{channelData.title}</h5>
                            </Row>
                            <Row style={{ justifyContent: 'space-between' }}>
                                <Col span={10}>
                                    <Row style={{ height: '40px' }}>
                                        <Col className="me-1">
                                            <Avatar />
                                        </Col>
                                        <Col className="me-4">
                                            <Row><p className="m-0">{channelData.name}</p></Row>
                                            <Row><p className="m-0">44.5N</p></Row>
                                        </Col>
                                        <Col className={cx('sub-button')}>
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
                                <Col span={14} style={{ textAlign: 'end' }} className={cx('below-video-button')}>
                                    {handleLike()}
                                    <a type="button" className={cx('share')} onClick={() => { handleCopy() }}><ArrowRightOutlined />share</a>
                                    <a type="button" className={cx('create-short')}><ScissorOutlined />tạo đoạn video</a>
                                    <a type="button" className={cx('save')}><SaveOutlined />save</a>
                                </Col>
                            </Row>
                        </div>
                        <VideoDescription value={channelData.des}></VideoDescription>
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
                                {otherVideoRender()}
                            </TabPanel>
                        </Box>
                    </Col>
                    <Col span={maxVideoWidth === 17 ? 1 : 0}></Col>
                    <Col span={maxVideoWidth === 17 ? 6 : 0} style={{ height: 'inherit' }}>
                        {maxVideoWidth === 17 ?
                            <>
                                <WatchVideoListSidebarBox />
                                {otherVideoRender()}
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

