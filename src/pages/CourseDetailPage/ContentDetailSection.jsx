import Accordion from '@/components/Accordion';
import { formatDate } from '@/utils/format'
import React from 'react'

const ContentDetailSection = ({ description, schedule, content, teams }) => {
    console.log("teams", teams)

    const { startDate, time, days, address } = schedule || {};

    const modifiedContent = content?.map((item, index) => {
        return {
            id: item.id || new Date().getTime() + index,
            title: item.title || "",
            content: item.description || "",
        }
    })

    const modifiedTeams = teams?.map((item, index) => {
        return {
            id: item.id || new Date().getTime() + index,
            name: item.name || "",
            description: item.description || "",
            image: item.image || "",
            jobTitle: item.jobTitle || "",
            tags: item.tags[0] || "",
        }
    })





    return (
        <section className="contentdetail">
            <div className="content">
                <div className="container">
                    <div className="contentrow ctintro">
                        <h3 className="contentrow__title title --t3">Giới thiệu</h3>
                        <div className="contenteditor" dangerouslySetInnerHTML={{ __html: description }} />
                        <div className="videowrap"><iframe title="YouTube video player" src="https://www.youtube.com/embed/C7GoVPoamdM?rel=0" width={560} height={315} frameBorder={0} allowFullScreen="allowfullscreen" /></div>
                    </div>
                    <div className="contentrow ctschedule">
                        <h3 className="contentrow__title title --t3">Lịch học</h3>
                        <div className="ctschedule__box">
                            <div className="info">
                                <div className="labeltext">
                                    <span className="label --blue">Khai giảng</span>
                                    <p className="title --t3">{formatDate(startDate) || ""}</p>
                                </div>
                                <div className="labeltext">
                                    <span className="label --blue">Ngày học</span>
                                    <p className="title --t3">{days || ""}</p>
                                </div>
                                <div className="labeltext">
                                    <span className="label --blue">Thời gian</span>
                                    <p className="title --t3">{time || ""}</p>
                                </div>
                                <div className="labeltext">
                                    <span className="label --blue">Địa điểm</span>
                                    <p className="title --t3">{address || ""}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentrow ctlession">
                        <h3 className="contentrow__title title --t3">Nội dung khoá học</h3>
                        <Accordion data={modifiedContent} />
                    </div>
                    <div className="contentrow ctrequest">
                        <h3 className="contentrow__title title --t3">Yêu cầu cần có</h3>
                        <div className="ctrequest__content">
                            <p>Có laptop cá nhân, cài đặt phần mềm Photoshop, VSCode.</p>
                            <p>Đã tìm hiểu về lộ trình học frontend và biết cơ bản HTML, CSS là một lợi thế</p>
                            <p>Hạn chế tối đa nghỉ học và hoàn thành bài tập được giao.</p>
                            <p>Thành viên CFD Circle phải có tinh thần trách nhiệm, chủ động cao trong việc học, cũng
                                như tự học và làm thêm tại
                                nhà.</p>
                        </div>
                    </div>
                    <div className="contentrow ctteacher">
                        <h3 className="contentrow__title title --t3">Giảng viên</h3>
                        <div className="ctteacher__content" >
                            {teams?.map((team) => {
                                const { id, name, description, image, jobTitle, tags } = team || {};
                                const tag = tags[0];
                                return (

                                    <div className="itemteacher" key={id}>
                                        <div className="itemteacher__avatar">
                                            <img src={image || ""} alt="CFD Circle" />
                                        </div>
                                        <div className="itemteacher__info">
                                            <div className="itemteacher__info-name">
                                                <p className="title --t3">{name || ""}</p>
                                                <span className="label badge --teacher">{tag || ""}</span>
                                            </div>
                                            <h5 className="itemteacher__info-pos label">{jobTitle || ""}</h5>
                                            <p className="itemteacher__info-des">{description || ""} </p>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentDetailSection