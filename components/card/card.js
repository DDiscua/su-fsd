"use client"
import { Card as AntdCard } from "antd";
export function Card({ date, name }) {
    return (
        <AntdCard className="card" title={date} bordered={false}>
            <p>    {name}</p>
        </AntdCard>
    )
}