import { Button, ButtonGroup } from "react-bootstrap"
import { Avatar, Box, Typography } from "@mui/material";
import { useState, useEffect, useRef, useContext, memo, useLayoutEffect } from "react"
import { Space, Row, Col, Drawer, Collapse as AntCollapse } from "antd";
import { CloseOutlined, LikeOutlined, DislikeFilled, ScissorOutlined, ArrowRightOutlined, SaveOutlined, LikeFilled, DislikeOutlined, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";
import Context from '../../../../GlobalVariableStorage/Context'
import Item from "../../partials/sidebar/SideBarItem"
import style from '../../../styles/Watch.module.scss';
import WatchVideoSidebar from "./inside/VideoSidebar";
import WatchVideoComment from "./inside/VideoComment";
import WatchVideoCommentInput from "./inside/VideoCommentInput";
import WatchVideoListSidebarBox from "./inside/VideoListSidebarBox";
import Navx from "../../partials/navbar/Nav";
import clsx from "clsx";
import VideoDescription from "./inside/VideoDescription";
import axios from "axios";
import classNames from 'classnames/bind'
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
    const [fs, setFullscreen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [channelData, setChannelData] = useState(null)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedBelowTab, setSelectedBelowTab] = useState(0)
    const [volume, setVolume] = useState(1)
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

    useLayoutEffect(() => {
        if (playerRef.current == null) return;
        playerRef.current.volume = volume
    }, [volume])

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

    const volumex = () => {
        if (volume > 0.5) {
            return (
                <span className="material-icons" style={controlStyle}>
                    volume_up
                </span>

            )
        } else if (volume > 0) {
            return (
                <span className="material-icons" style={controlStyle}>
                    volume_down
                </span>
            )
        } else {
            return (
                <span className="material-icons" style={controlStyle}>
                    volume_mute
                </span>
            )
        }
    }


    const otherVideoRender = () => {
        const viewTab = () => {
            if (selectedTab === 0) {
                return <WatchVideoSidebar />
            } else if (selectedTab === 1) {
                return <WatchVideoSidebar />
            } else {
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
                            <button key={index} className={
                                clsx({ [cx('tab-button')]: (selectedTab !== index) }, { [cx('selected-tab-button')]: (selectedTab === index) })
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

    const belowRender = () => {
        const viewTab = () => {
            if (selectedBelowTab === 0) {
                return <>
                    <WatchVideoCommentInput />
                    <WatchVideoComment />
                </>
            } else if (selectedBelowTab === 1) {
                return <WatchVideoListSidebarBox />
            } else {
                let p = otherVideoRender()
                return p
            }
        }
        const btn = [
            {
                'title': 'bình luận',
            },
            {
                'title': 'danh sách phát',
            },
            {
                'title': 'video khác',
            }
        ]
        return (
            <div className={cx('sidebar-below')}>
                <div className={cx('top-housing')}>
                    {btn.map((btn, index) => {
                        return (
                            <button key={index} className={
                                clsx({ [cx('tab-button')]: (selectedBelowTab !== index) }, { [cx('selected-tab-button')]: (selectedBelowTab === index) })
                            } onClick={() => { setSelectedBelowTab(index) }}>{btn.title}</button>
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

    const controlStyle = {
        'color': 'aliceblue',
        'fontSize': '2.2em',
    }

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
                                        !play ? <span className="material-icons" style={controlStyle} onClick={() => { playerRef.current.play(); setPlay(true) }}>
                                            play_arrow
                                        </span> : <span className="material-icons" style={controlStyle} onClick={() => { playerRef.current.pause(); setPlay(false) }}>
                                            pause
                                        </span>
                                    }
                                    <span className="material-icons" style={controlStyle}>
                                        skip_next
                                    </span>
                                    <>
                                        {playerRef.current == null ? <span className="material-icons" style={controlStyle}>volume_up</span> : volumex()}
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            onChange={(e) => { setVolume(e.target.value) }}
                                            defaultValue="1"
                                        />
                                    </>
                                </div>
                                <div className={cx('right-control')}>
                                    <span className="material-icons" style={controlStyle}>
                                        subtitles
                                    </span>
                                    <span className="material-icons" style={controlStyle}>
                                        settings
                                    </span>
                                    {
                                        !fs
                                            ?
                                            <div onClick={() => { setFullscreen(true); handleFullScreen() }}><FullscreenExitOutlined style={controlStyle} /></div>
                                            :
                                            <div onClick={() => { setFullscreen(false); handleFullScreen() }}><FullscreenOutlined style={controlStyle} /></div>
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
                        <div className={clsx(
                            { [style.true]: watchDpHandler },
                            { [style.false]: !watchDpHandler }
                        )}>
                            {belowRender()}
                        </div>
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

