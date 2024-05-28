import CourseItem from "@/components/CourseItem";
import { CourseTypes } from "@/constants/general";
import useDebounce from "@/hooks/useDebounce";
import useQuery from "@/hooks/useQuery";
import { courseServices } from "@/services/courseServices";
import { Empty, Skeleton } from "antd";
import { useState } from "react";

const CoursesPage = () => {
    const {
        data: dataCourses,
        error: errorCourses,
        loading: loadingCourses,
    } = useQuery(courseServices.getCourses);

    const courses = dataCourses?.courses || [];
    const loading = useDebounce(loadingCourses, 300);

    return (
        <main className="mainwrapper courses --ptop">
            <div className="container">
                <div className="textbox">
                    <div className="container">
                        <h2 className="title --t2">Tất cả khoá học</h2>
                    </div>
                </div>
                <div className="courses__list">
                    {!loading && courses?.length === 0 && (
                        <Empty
                            description="Không tìm thấy dữ liệu nào"
                            style={{ margin: "0 auto" }}
                        />
                    )}
                    {loading &&
                        Array(4)
                            .fill("")
                            .map((_, index) => (
                                <div key={index} className="courses__list-item" style={{ height: "50vh" }}>
                                    <Skeleton active />
                                    <br />
                                    <Skeleton active />
                                </div>
                            ))}
                    {!loading && courses?.length > 0 && courses.map((course, index) => {
                        return (
                            <CourseItem
                                key={course?.id || index}
                                {...course}
                                type={CourseTypes.normal}
                            />
                        )
                    })}
                </div>
            </div>
        </main>

    )
}

export default CoursesPage