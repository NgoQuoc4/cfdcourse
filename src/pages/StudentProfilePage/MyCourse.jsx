import CourseItem from "@/components/CourseItem";
import { useAuthContext } from "@/context/AuthContext"
import { Empty } from "antd";

const MyCourse = () => {
    const { courseInfo } = useAuthContext();
    console.log("courseInfo", courseInfo);
    return (
        <div className="tab__content-item" style={{ display: 'block' }}>
            <div className="courses__list">
                {!!!courseInfo.length &&
                    <Empty
                        description="Không tìm thấy dữ liệu nào"
                        style={{ margin: "0 auto" }}
                    />}
                {!!courseInfo.length && courseInfo.map((item, index) => (
                    <CourseItem
                        key={item.id || new Date().getTime() + index}
                        {...item?.course} />
                ))}
            </div>
        </div>
    )
}
export default MyCourse