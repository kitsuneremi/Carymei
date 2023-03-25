import { Fragment, useContext, useState, useEffect, memo } from "react";
import classNames from 'classnames/bind'
import {
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
    IconButton,
    Tooltip,
    Container,
    Box
} from '@mui/material'
import { PersonAdd, Settings, Logout, CheckOutlined, CloseOutlined } from '@mui/icons-material'
import { Row, Switch } from 'antd'
import style from '../../../../styles/AccountMenu.module.scss'
import Context from '../../../../../GlobalVariableStorage/Context'
import clsx from "clsx";
function AccountMenu() {
    const cx = classNames.bind(style)
    const context = useContext(Context)
    const [showDropdown, setShowDropdown] = useState(null);
    const [mode, setMode] = useState(`${context.mode}`)
    const open = Boolean(showDropdown);
    const handleClick = (event) => {
        setShowDropdown(event.currentTarget);
    };
    const handleClose = () => {
        setShowDropdown(null);
    };

    useEffect(() => {
        context.mode === true ? setMode(true) : setMode(false)
    }, [context.mode])

    return (
        <Fragment>
            <Tooltip title="Account settings" className={cx('tooltip')}>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : 'false'}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>

                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={showDropdown}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                className={mode ? cx('light') : cx('dark')}
            >
                <Container style={{ padding: 0 }} className={cx('container')}>
                    <MenuItem>
                        <Row style={{ display: "flex" }}><Avatar /></Row>
                        <Row style={{ display: "inline-block" }}>
                            <p className={cx('text')}>Erina Saiyukii</p>
                            <p className={cx('text')}>@saiyukii2811</p>
                            <a className={cx('text')}>Quản lý tài khoản google của bạn</a>
                        </Row>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>Kênh của bạn</p>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>Creator Studio</p>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>Chuyển đổi tài khoản</p>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>Chuyển đổi tài khoản</p>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>Chuyển đổi tài khoản</p>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>Chuyển đổi tài khoản</p>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>Chuyển đổi chế độ</p>
                        <Switch style={{ marginLeft: '30px' }}
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            defaultChecked
                            onClick={() => { context.handleChangeMode() }}
                        />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>Chuyển đổi tài khoản</p>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <p className={cx('body-text')}>
                            Chuyển đổi tài khoản
                        </p>
                    </MenuItem>
                </Container>
            </Menu>
        </Fragment>
    );
}
export default memo(AccountMenu)