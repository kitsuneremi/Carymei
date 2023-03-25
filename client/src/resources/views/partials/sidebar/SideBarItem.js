import { ListGroup } from "react-bootstrap"
import { useState, useEffect, memo, useRef, useContext } from "react"
import { MenuOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import style from '../../../styles/SidebarItem.module.scss'
import Item from './inside/SubcribebChannel'
import Context from "../../../../GlobalVariableStorage/Context";
function SideBarItem(props) {
  const context = useContext(Context)
  const home = useRef()
  const short = useRef()
  return (
    <aside>
      <ListGroup variant="flush">
        <ListGroup.Item style={{ background: 'transparent' }}>
          <Row className={`${style.sideRow}`}>
            <Col className={`${style.iconBox}`}><MenuOutlined /></Col>
            {props.show ? <Col className={`text-start ${style.fixText} ${style.textBox}`} >trang chủ</Col> : <></>}
          </Row>
          <Row className={`${style.sideRow}`}>
            <Col className={`${style.iconBox}`}><MenuOutlined /></Col>
            {props.show ? <Col className={`text-start ${style.fixText} ${style.textBox}`}>shorts</Col> : <></>}
          </Row>
          <Row className={`${style.sideRow}`}>
            <Col className={`${style.iconBox}`}><MenuOutlined /></Col>
            {props.show ? <Col className={`text-start ${style.fixText} ${style.textBox}`}>kênh đăng ký</Col> : <></>}
          </Row>
        </ListGroup.Item>
        <ListGroup.Item style={{ background: 'transparent' }}>
          <Item name="evondev" show={props.show} />
          <Item name="ehe" show={props.show} />
          <Item name="test" show={props.show} />
          <Item name="cc" show={props.show} />
          <Item name="cc" show={props.show} />
          <Item name="cc" show={props.show} />
          <Item name="cc" show={props.show} />
          <Item name="cc" show={props.show} />
          <Item name="cc" show={props.show} />
        </ListGroup.Item>
      </ListGroup>
    </aside>
  )
}

export default memo(SideBarItem)