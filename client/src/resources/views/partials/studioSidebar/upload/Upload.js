import { memo, useState } from 'react'
import axios from "axios";
import { Button, message, Steps, theme } from 'antd';
import Step1 from './inside/Step1'
import Step2 from './inside/Step2'
const steps = [
    {
        title: 'First',
        content: <Step1 />,
    },
    {
        title: 'Second',
        content: <Step2 />,
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];
//   
const Upload = () => {


    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    return (
        <div style={{padding: '1% 5%'}}>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </div>
    )
}

export default memo(Upload)