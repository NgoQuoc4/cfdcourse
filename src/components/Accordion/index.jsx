import { Empty } from 'antd'
import React, { useEffect, useState } from 'react'

const Accordion = ({ label = "", data = [], defaultActiveIndex = -1 }) => {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)

    return (
        <div className="accordion">
            {!!label && <h3 className="accordion__title label">{label}</h3>}
            {
                data?.length === 0 ? (
                    <Empty
                        description="Không tìm thấy dữ liệu nào"
                        style={{ margin: "0 auto" }}
                    />) : (
                    data.map((item, index) => {
                        const { id, title, content } = item || {};
                        return (
                            <div
                                key={id || index}
                                className={`accordion__content ${activeIndex === index ? "active" : ""}`}>
                                <div className="accordion__content-title"
                                    onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                                >
                                    <h4><strong>{title || ""}</strong></h4>
                                </div>
                                <div className="accordion__content-text"
                                    style={{ display: activeIndex === index ? "block" : "none" }}>
                                    {content || ""}
                                </div>
                            </div>
                        );
                    })
                )
            }
        </div>
    )
}

export default Accordion