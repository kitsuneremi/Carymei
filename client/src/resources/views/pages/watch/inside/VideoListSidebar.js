import {memo} from 'react'
import {Col, Divider, Row} from "antd";
import {SettingOutlined} from "@ant-design/icons";
import style from '../../../../styles/Watch.module.scss'

function WatchVideoListSidebar(){
    return (
        <div className={style.listVideoDeeper}>
            <Row className={`${style.sidebarListBox}`}>
                <Col span={7} className={`${style.sidebarListItemCol1}`}>
                    <img className={`${style.sidebarListImg}`} src="https://i.ytimg.com/vi/dvLDLiy_MT4/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLA7yWc4DE9fJFTxC6_Vu_6P9J9Z8A" />
                </Col>
                <Col span={16} className={`${style.sidebarListItemCol2}`}>
                    <Row className={`${style.sidebarListTitleBox}`}>
                        <p className={`${style.sidebarListTitle}`}>[Classical/Hardcore]</p>
                    </Row>
                    <Row className={`${style.sidebarListChannelnameBox}`}>
                        <p className={`${style.sidebarListChannelname}`}>cold kiss sound</p>
                    </Row>
                </Col>
                <Col span={1} className={`${style.sidebarListItemCol3}`}>
                    <SettingOutlined />
                </Col>
            </Row>
            <Divider style={{ margin: '10px 0' }} />
        </div>
    )
}

export default memo(WatchVideoListSidebar)