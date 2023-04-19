import { useState } from "react"

import style from '../../../../styles/StudioManager.module.scss'
import classNames from "classnames/bind";
import clsx from 'clsx'
const Manager = () => {
    const cx = classNames.bind(style)
    //useState
    const [showOptionMenu,setShowOptionMenu] = useState(true);
    const [listVideo, setListVideo] = useState([{title: 'test'},{}]);
    const [showSubOption, setShowSubOption] = useState(null)
    const [selectedTab, setSelectedTab] = useState(0)

    const listButton = [
        {
            title: 'video'
        },
        {
            title: 'trực tiếp'
        },
        {
            title: 'bài đăng'
        },
        {
            title: 'danh sách phát'
        },
        {
            title: 'postcad'
        },
    ]
    const Tabbutton = () => {
        return (
            <div className={cx('tab-box')}>
                {listButton.map((btn, index) => {
                    return <button key={index} className={
                        clsx({[cx('tab-button')]: (selectedTab !== index)}, {[cx('selected-tab-button')]: (selectedTab === index)})
                    } onClick={() => {setSelectedTab(index)}}>{btn.title}</button>
                })}
            </div>
        )
    }

    return (
        <>
            <div><h2>Nội dung của tôi</h2></div>
            <div>{Tabbutton()}</div>
            {showOptionMenu && <div>
                <div>
                    <p>Đã chọn **</p>
                    <button>chỉnh sửa</button>
                    <button>thêm vào danh sách phát</button>
                    <button>thao tác khác</button>
                </div>
                <button>X</button>
            </div>}
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <th>Video</th>
                            <th>Chế độ hiển thị</th>
                            <th>Hạn chế</th>
                            <th>Ngày</th>
                            <th>Số lượt xem</th>
                            <th>Số bình luận</th>
                            <th>Lượt thích(%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listVideo !== [] ? listVideo.map((video, index) => {
                            return <tr key={index} onMouseEnter={() => {setShowSubOption(index)}}>
                                <td><input type="checkbox"/></td>
                                <td><img src="" alt="img"/></td>
                                <td>
                                    <div>video title</div>
                                    {showSubOption === index ? <div>focused</div> : <div>normal</div>} 
                                </td>
                                <td>
                                    bản nháp
                                </td>
                                <td>
                                    không có
                                </td>
                                <td>
                                    ???
                                </td>
                                <td>-</td>
                                <td>-</td>
                                <td><button>chỉnh sửa</button></td>
                            </tr>
                        }) : <></>}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Manager  