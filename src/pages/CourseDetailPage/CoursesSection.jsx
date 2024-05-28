import CourseItem from '@/components/CourseItem'
import { CourseTypes } from '@/constants/general'
import useDebounce from '@/hooks/useDebounce'
import { Empty, Skeleton } from 'antd'
import React from 'react'

const CoursesSection = ({ loading: loadingCouser = false, courses, id }) => {

    const loading = useDebounce(loadingCouser, 300);
    return (
        <section className="courses">
            <div className="container">
                <div className="heading --center --noline">
                    <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
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
                        if (index < 3 && course.id !== id)
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
        </section>
    )
}

export default CoursesSection