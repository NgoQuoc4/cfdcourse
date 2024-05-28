import React from 'react'

const InfoOrder = ({ image, price, name, teacherInfo }) => {
    return (
        <div className="itemorder infoorder">
            <h3 className="title --t3">Thông tin đơn hàng</h3>
            <div className="boxorder">
                <div className="boxorder__col">
                    <label className="label">Tên khoá học</label>
                    <div className="boxorder__col-course">
                        <div className="img"><img src={image || ""} alt /></div>
                        <div className="info">
                            <p className="name"><strong>{name || ""}</strong></p>
                            <p>{teacherInfo.name || ""}</p>
                        </div>
                    </div>
                </div>
                <div className="boxorder__col">
                    <label className="label">Tạm tính</label>
                    <p>{price || ""}VND</p>
                </div>
                <div className="boxorder__col">
                    <label className="label">Giảm giá</label>
                    <p>0đ</p>
                </div>
                <div className="boxorder__col">
                    <label className="label">thành tiền</label>
                    <p><strong>{price || ""}VND</strong></p>
                </div>
            </div>
        </div>
    )
}

export default InfoOrder