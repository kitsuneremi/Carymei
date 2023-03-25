import {Col, Row} from "antd";
import {MoreOutlined} from "@ant-design/icons";
import WatchVideoListSidebar from "./VideoListSidebar";
import {memo, useState, useEffect} from 'react'
import style from '../../../../styles/Watch.module.scss'
import 'bootstrap/dist/js/bootstrap'

function WatchVideoListSidebarBox(props){
    const [showSidebarLine,setShowSidebarLine] = useState(true)
    const [openListBox,setOpenListBox] = useState(true)

    useEffect(() => {
        window.addEventListener('resize',setShowSidebarLine(false))
        return () => {
            window.removeEventListener('resize',setShowSidebarLine(false))
        }
    },[])
    return (
        <div className={`${style.subSidebarTop}`}>
            <Row onClick={() => {setOpenListBox(!openListBox); setShowSidebarLine(!openListBox)}}
                 className={`${style.sidebarListHeaderBox}`}
                 style={showSidebarLine ? {borderBottom : "1px solid grey", zIndex: 1} : {border: 0}}
            >
                <Col span={20} onClick={() => {}}>
                    <p style={{margin:'0 0 0 5%'}}>danh sách phát kết hợp Grievous lady</p>
                </Col>
                <Col span={4}><MoreOutlined /></Col>
            </Row>
            <div className={`collapse ${openListBox ? 'show' : ''}`} id="box">
                <div className="card card-body" style={{border:0, padding: '0 1em', borderRadius: '5%'}}>
                    <div style={{maxHeight:'400px',overflow:'scroll'}}>
                        <WatchVideoListSidebar/>
                        <WatchVideoListSidebar/>
                        <WatchVideoListSidebar/>
                        <WatchVideoListSidebar/>
                        <WatchVideoListSidebar/>
                        <WatchVideoListSidebar/>
                        <WatchVideoListSidebar/>
                        <WatchVideoListSidebar/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(WatchVideoListSidebarBox)