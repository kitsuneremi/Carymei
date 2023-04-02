import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import style from '../../../../../styles/StudioSidebarUploadStep2.module.scss'
import classNames from 'classnames/bind'
import { UploadOutlined, PlusOutlined, CopyOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, message, Upload, Progress, Modal, Input, Row, Col } from 'antd';
import Context from '../../VariableStorage/Context'

const { TextArea } = Input;

const Step2 = () => {
    const context = useContext(Context)
    const cx = classNames.bind(style)

    const [loading, setLoading] = useState(false);

    const videoLinkRef = useRef()

    const getFileExt = (fileName) => {
        console.log(fileName)
        return fileName.name.substring(fileName.name.lastIndexOf('.') + 1);
    }

    const handleSubmit = async (info) => {
        const formData = new FormData();
        formData.append('file', context.avatarFile, context.finalLink + '.' + getFileExt(context.avatarFile));
        context.setAvatarFileLink(URL.createObjectURL(context.avatarFile))
        try {
            axios.post('http://localhost:5000/api/upload/img', formData, {
                onUploadProgress: function (progressEvent) {
                    console.log('Upload Progress: ' + Math.round((progressEvent.loaded / progressEvent.total) * 100) + '%');
                    // setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100))
                }
            })
                .then(res => { console.log('request done') })
        } catch (error) {
            console.error(error);
        }
    }
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

    async function handleCopy() {
        try {
          await navigator.clipboard.writeText(videoLinkRef.current.value);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
    return (
        <>
            <div className={cx('step2')}>
                <div className={cx('left-side')}>
                    <h2>Chi tiết</h2>
                    <div>
                        <TextArea className={cx('text-area')} placeholder="Tiêu đề" style={{ marginBottom: '30px' }} />
                    </div>
                    <div>
                        <TextArea className={cx('text-area')} placeholder="Mô tả" style={{ marginBottom: '30px' }} />
                    </div>
                    <h4>hình thu nhỏ</h4>
                    <div>
                        <Upload
                            name="file"
                            listType="picture-card"
                            className={cx('img-uploader')}
                            beforeUpload={(file) => { context.setAvatarFile(file) }}
                            showUploadList={false}
                            onChange={(info) => { handleSubmit(info) }}
                            customRequest={() => { }}
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
                    <video src={context.videoLink} controls className={cx('video-preview')}></video>
                    <p>đường liên kết video</p>
                    <div className={cx('video-link-box')}>
                        <input value={`http://localhost:3000/watch/${context.finalLink}`} className={cx('video-link')} disabled ref={videoLinkRef}/>
                        <CopyOutlined className={cx('copy-button')} onClick={() => {handleCopy()}}/>
                    </div>
                    <div>
                        <p>tên tệp</p>
                        <p>{context.videoFile.name}</p>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Step2