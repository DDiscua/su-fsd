"use client"
import { items } from "./menuOptions";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Row, Col, Dropdown, Space, Button } from 'antd';
import { useState } from "react";

export function DropdownSort({ sortHook }) {

    const [currentOption, setCurrentOption] = useState('');

    const handleMenuClick = (e) => {
        const { key } = e;
        const option = items[key];
        setCurrentOption(option.label);
        sortHook(option.key);
    };


    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <Dropdown menu={menuProps} className="dropdown-input">
            <Button>
                <Space>
                    {
                        currentOption ? currentOption : 'Sort By'
                    }
                </Space>
                <DownOutlined />
            </Button>
        </Dropdown>
    )
}