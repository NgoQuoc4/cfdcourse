import Accordion from '@/components/Accordion'

const FaqSection = ({ questions = [], loading = false }) => {
    const modifiedQuestions = questions.map((item) => {
        return {
            id: item.id || "",
            title: item.question || "",
            content: item.answer || "",
        }
    })
    const commonQuestions = modifiedQuestions.slice(0, 6);
    const ortherQuestions = modifiedQuestions.slice(6);
    return (
        <section className="faq --scpadding">
            <div className="container">
                <div className="faq__inner">
                    <div className="heading --noline --center">
                        <h2 className="heading__title title --t2">Câu hỏi <span className="color--primary">thường gặp</span>
                        </h2>
                    </div>
                    <div className="faq__list">
                        {!loading && <Accordion data={commonQuestions} label="Thông tin chung" />}
                        {!loading && <Accordion data={ortherQuestions} label="Đăng ký, thanh toán" />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection