import { useEffect, useState, useContext } from "react";
import axios from "axios";
import style from '../../../../../styles/StudioSidebarUploadStep1.module.scss'
import classNames from 'classnames/bind'
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Progress } from 'antd';
import Context from '../../VariableStorage/Context'
const Step1 = () => {
    const context = useContext(Context)
    const cx = classNames.bind(style)
    const [progressx, setProgress] = useState(0);

    useEffect(() => {
        if (context.videoFile != null) {
            setProgress(context.videoFile.percent)
        }
    }, [context.videoFile])

    const handleSubmit = async (event) => {
        console.log(event)
        const formData = new FormData();
        formData.append('video', context.videoFile);

        try {
            axios.post('http://localhost:5000/api/upload/video', formData, {
                onUploadProgress: function (progressEvent) {
                    console.log('Upload Progress: ' + Math.round((progressEvent.loaded / progressEvent.total) * 100) + '%');
                    setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100))
                }
            })
                .then(res => { console.log(res.data) })
        } catch (error) {
            console.error(error);
        }
    }

    const handleBeforeUpload = (file) => {
        context.setSelectedFile(file)
        context.setVideoFileLink(URL.createObjectURL(file))
    }

    return (
        <>
            <h4>lựa chọn video tải lên</h4>
            <Upload
                customRequest={() => { console.log() }}
                beforeUpload={(file) => { handleBeforeUpload(file) }}
                progress={<Progress type="line" percent={progressx} />}
                onChange={async (info) => {handleSubmit(info) }}
            >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </>
    )

}

export default Step1