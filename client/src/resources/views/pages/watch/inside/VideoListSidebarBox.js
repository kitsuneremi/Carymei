import { Col, Row } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import WatchVideoListSidebar from "./VideoListSidebar";
import { memo, useState, useEffect } from 'react'
import style from '../../../../styles/Watch.module.scss'
import axios from "axios";

function WatchVideoListSidebarBox(props) {
    const [showSidebarLine, setShowSidebarLine] = useState(true)
    const [openListBox, setOpenListBox] = useState(true)
    const [listVideo, setListVideo] = useState(null)

    useEffect(() => {
        window.addEventListener('resize', setShowSidebarLine(false))
        return () => {
            window.removeEventListener('resize', setShowSidebarLine(false))
        }
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/video')
            .then(res => { setListVideo(res.data) })
    }, [])
    return (
        <div className={`${style.subSidebarTop}`}>
            <Row onClick={() => { setOpenListBox(!openListBox); setShowSidebarLine(!openListBox) }}
                className={`${style.sidebarListHeaderBox}`}
                style={showSidebarLine ? { borderBottom: "1px solid grey", zIndex: 1 } : { border: 0 }}
            >
                <Col span={20} onClick={() => { }}>
                    {/* <p style={{ margin: '0 0 0 5%' }}>danh sách phát kết hợp Grievous lady</p> */}
                </Col>
                <Col span={4}><MoreOutlined /></Col>
            </Row>
            <div className={`collapse ${openListBox ? 'show' : ''}`} id="box">
                <div className="card card-body" style={{ border: 0, padding: '0 1em', borderRadius: '5%' }}>
                    <div style={{ maxHeight: '400px', overflow: 'scroll' }}>
                        {listVideo != null ? listVideo.map((video, index) => {
                            return <WatchVideoListSidebar key={index} name={video.title} title={video.title} videoId={video.videoId} channelName={video.channelName} link={video.link}/>
                        }) : <></>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(WatchVideoListSidebarBox)