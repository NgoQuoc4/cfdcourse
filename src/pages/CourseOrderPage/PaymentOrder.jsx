import React from 'react'

const PaymentOrder = ({ handleChange, selectedPayment, disabled }) => {
    const PAYMENTS = [
        {
            id: "atm",
            icon: "/img/icon-payment-method-atm.svg",
            label: "Thành toán bằng chuyển khoản",
            description: `Sau khi bấm đăng ký, mã khoá học &amp; thông tin tài khoản ngân hàng sẽ được gửi đến
                        email của bạn, bạn vui lòng chuyển khoản với nội dung: mã khoá học, họ và tên, số điện
                        thoại, CFD
                        Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học của bạn sau khi giao dịch thành
                        công.`,
        },
        {
            id: "momo",
            icon: "/img/icon-payment-method-mo-mo.svg",
            label: "Thanh toán bằng ví Momo",
            description: `Sau khi bấm đăng ký, mã khoá học &amp; thông tin tài khoản MoMo sẽ được gửi đến
                        email của bạn, bạn vui
                        lòng chuyển khoản với nội dung: mã khoá học, họ và tên, số điện thoại, CFD
                        Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học của bạn sau khi giao dịch thành
                        công.`,
        },
        {
            id: "cash",
            icon: "/img/icon-payment-method-cod.svg",
            label: "Thanh toán bằng tiền mặt",
            description: `Sau khi bấm đăng ký, thông tin khoá học sẽ được gửi đến email của bạn, bạn
                        vui lòng đến văn phòng CFD Circle vào ngày khai
                        giảng để đóng học phí tại số 11b, Phan Kế Bính, quận 1, TP Hồ Chí Minh.`,
        }
    ]

    return (
        <div className="itemorder paymentorder">
            <h3 className="title --t3">Hình thức thanh toán</h3>
            <div className="boxorder">
                {
                    PAYMENTS?.map((payment) => {
                        const { id, icon, label, description } = payment || {};
                        return (
                            <div className="boxorder__pay" key={id} onClick={() => handleChange(id)}>
                                <label className="radiocontainer">
                                    <img src={icon} alt />{label}
                                    <input
                                        checked={selectedPayment === id}
                                        type="radio"
                                        name="radio"
                                        value={id}
                                        disabled={disabled}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <div className="boxorder__pay-tooltip"
                                    style={{
                                        display: selectedPayment === id ? "block" : "none",
                                        pointerEvents: selectedPayment ? "none" : "all"
                                    }}
                                >{description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default PaymentOrder