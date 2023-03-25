import {memo} from "react";
import {Col, Row} from "antd";
import {Avatar, Box, Input, TextField} from "@mui/material";
import style from '../../../../styles/WatchComment.module.scss'
import {AccountCircle} from "@mui/icons-material";

function WatchVideoCommentInput(){
    return (
        <Row className={style.commentRow}>
            <Col span={1}><Avatar className={style.avatar} /></Col>
            <Col span={23}>
                <Row className={`${style.inputTextFieldBox} mb-2`}>
                    <TextField id="standard-basic" label="bình luận của bạn" variant="standard" className={style.inputTextField}/>
                </Row>
                <Row style={{justifyContent:'space-between'}}>
                    <Col span={1}>
                        <AccountCircle />
                    </Col>
                    <Col span={3} style={{display:'flex',justifyContent:'space-between'}}>
                        {/*<p className='watch-comment-text'>hủy</p>*/}
                        {/*<p className='watch-comment-text'>bình luận</p>*/}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default memo(WatchVideoCommentInput)