import CourseItem from "@/components/CourseItem";
import { CourseTypes } from "@/constants/general";
import { Empty } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseComingSection = ({ courses, loading }) => {
    const { courseSlug } = useParams()
    useEffect(() => {
        const flickytyController = () => {
            let courseComingSlider = $("#coursecoming__slider");
            courseComingSlider.flickity({
                cellAlign: "left",
                contain: true,
                prevNextButtons: false,
                pageDots: false,
                dragThreshold: 0,
                wrapAround: true
            });
            $(".coursecoming .control .control__next").on(
                "click",
                function (e) {
                    e.preventDefault();
                    courseComingSlider.flickity("next");
                }
            );
            $(".coursecoming .control .control__prev").on(
                "click",
                function (e) {
                    e.preventDefault();
                    courseComingSlider.flickity("previous");
                }
            );
        };
        const myTimeout = setTimeout(() => {
            if (courses?.length > 0) {
                flickytyController();
            }
        }, 300);
        return () => {
            clearTimeout(myTimeout);
        }
    }, [courses]);
    return (
        <section className="coursecoming --scpadding">
            <div className="container">
                <div className="heading">
                    <h2 className="heading__title title --t2">Khoá học <span className="color--primary">sắp khai giảng</span>
                    </h2>
                    <div className="control">
                        <div className="control__prev">
                            <img src="img/icon-btn-control.svg" alt="icon prev" />
                        </div>
                        <div className="control__next">
                            <img src="img/icon-btn-control.svg" alt="icon next" />
                        </div>
                    </div>
                </div>
            </div>

            {!loading && courses?.length === 0 ? (
                <Empty
                    description="Không tìm thấy dữ liệu nào"
                    style={{ margin: "0 auto" }}
                />
            ) : (
                <div className="coursecoming__list" id="coursecoming__slider">
                    {courses?.length > 0 &&
                        courses.map((course, index) => {
                            return (
                                <CourseItem
                                    key={course?.id || index}
                                    {...course}
                                    type={CourseTypes.coming}
                                />
                            );
                        })}
                </div>
            )
            }
        </section>
    )
}

export default CourseComingSection