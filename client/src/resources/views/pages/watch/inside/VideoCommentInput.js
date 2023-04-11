import {memo} from "react";
import {Col, Row} from "antd";
import {Avatar, Box, Input, TextField} from "@mui/material";
import style from '../../../../styles/WatchComment.module.scss'
import {AccountCircle} from "@mui/icons-material";
import classNames from 'classnames/bind'
function WatchVideoCommentInput(){
    const cx = classNames.bind(style)
    return (
        <Row className={cx('comment-row')}>
            <Col span={1}><Avatar className={cx('avatar')} /></Col>
            <Col span={23}>
                <Row className={`${cx('input-text-field-box')} mb-2`}>
                    <TextField id="standard-basic" label="bình luận của bạn" variant="standard" className={cx('input-text-field')}/>
                </Row>
                <Row style={{justifyContent:'space-between'}}>
                    <Col span={1}>
                        <AccountCircle />
                    </Col>
                    <Col span={3} style={{display:'flex',justifyContent:'space-between'}}>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default memo(WatchVideoCommentInput)