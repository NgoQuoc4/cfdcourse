import { useAuthContext } from "@/context/AuthContext"
import { formatCurrency, formatDate } from "@/utils/format";
import { Empty } from "antd";

const MyPayment = () => {
    const { paymentInfo } = useAuthContext();
    return (
        <div className="tab__content-item" style={{ display: 'block' }}>
            {!!!paymentInfo.length &&
                <Empty
                    description="Không tìm thấy dữ liệu nào"
                    style={{ margin: "0 auto" }}
                />}
            {!!paymentInfo.length &&
                paymentInfo.map((item, index) => {
                    const { id, paymentMethod, createdAt, course } = item;
                    return (
                        <div key={id || new Date().getTime() + index} className="itemhistory">
                            <div className="name">{course?.name}</div>
                            <div className="payment">{paymentMethod}</div>
                            <div className="date">{formatDate(createdAt)}</div>
                            <div className="money">{formatCurrency(course?.price)}VND</div>
                        </div>
                    )
                })}

        </div>
    )
}

export default MyPayment