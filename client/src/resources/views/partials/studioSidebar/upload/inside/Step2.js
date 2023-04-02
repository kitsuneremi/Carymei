import { useContext, useEffect, useState } from "react";
import axios from "axios";
import style from '../../../../../styles/StudioSidebarUploadStep2.module.scss'
import classNames from 'classnames/bind'
import { UploadOutlined, PlusOutlined, CopyOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, message, Upload, Progress, Modal, Input, Row, Col } from 'antd';
import Context from '../../VariableStorage/Context'

const { TextArea } = Input;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const Step1 = () => {
    const context = useContext(Context)
    const cx = classNames.bind(style)

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [progress, setProgress] = useState();
    const [stage, setStage] = useState()

    useEffect(() => {
        if (stage == 'done') {
            context.setAvatarFileLink(URL.createObjectURL(context.avatarFile))
            console.log(imageUrl)
            setLoading(false)
        }

    }, [stage])

    const handleChange = (info) => {
        setStage(info.file.status)
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <>
            <div className={cx('step2')}>
                <div className={cx('left-side')}>
                    <h2>Chi tiết</h2>
                    <TextArea rows={4} placeholder="Tiêu đề" style={{ marginBottom: '30px' }} />
                    <TextArea rows={4} placeholder="Mô tả" style={{ marginBottom: '30px' }} />
                    <h4>hình thu nhỏ</h4>
                    <div>
                        <Upload
                            name="file"
                            listType="picture-card"
                            className={cx('img-uploader')}
                            beforeUpload={(file) => { context.setAvatarFile(file) }}
                            showUploadList={false}
                            action="http://localhost:5000/api/upload/img"
                            onChange={handleChange}
                        >
                            {uploadButton}
                        </Upload>
                        {context.avatarLink ? (
                            <>
                                <p>preview</p>
                                <img
                                    src={context.avatarLink}
                                    alt="avatar"
                                    className={cx('img-preview')}
                                />
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className={cx('right-side')}>
                    <video src="">

                    </video>
                    <p>đường liên kết video</p>
                    <div className={cx('video-link-box')}>
                        <input value={context.videoLink} className={cx('video-link')} disabled />
                        <CopyOutlined className={cx('copy-button')} />
                    </div>
                    <div>
                        <p>tên tệp</p>
                        <p>{ }</p>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Step1