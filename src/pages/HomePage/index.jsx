import useQuery from "@/hooks/useQuery";
import { courseServices } from "@/services/courseServices";
import axios from "axios"
import { useEffect, useState } from "react"
import HeroSection from "./HeroSection";
import CourseComingSection from "./CourseComingSection";
import CoursesSection from "./CoursesSection";
import TeacherSection from "./TeacherSection";
import FeaturedSection from "./FeaturedSection";
import TestimonialSection from "./TestimonialSection";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import CallRegisterSection from "./CallRegisterSection";
import { galleryServices } from "@/services/galleryServices";
import { teamServices } from "@/services/teamServices";
import { questionService } from "@/services/questionService";

export const HomePage = () => {
    // get courses section
    const {
        data: dataCourses,
        error: errorCourses,
        loading: loadingCourses,
    } = useQuery(courseServices.getCourses);
    //modifi data courses      
    // coming course data
    const comingCourses =
        dataCourses?.courses?.filter(
            (course) => course.startDate && new Date(course.startDate) > new Date()
        ) || [];
    //////////////////////////////////////////////////////////////////////////////////////
    // get gallery section  
    const {
        data: dataGallery,
        error: errorGallery,
        loading: loadingGallery,
    } = useQuery(galleryServices.getGallery);

    const galleries = dataGallery?.galleries?.[0]?.images || [];
    //get team data
    const {
        data: dataTeam,
        error: errorTeam,
        loading: loadingTeam,
    } = useQuery(teamServices.getTeam);

    const teams = dataTeam?.teams || [];

    //  get data questions
    const {
        data: dataQuestion,
        error: errorQuestion,
        loading: loadingQuestion,
    } = useQuery(questionService.getQuestion);

    const questions = dataQuestion?.questions || [];

    return (
        <main className="mainwrapper">
            <HeroSection />
            <CourseComingSection courses={comingCourses} loading={loadingCourses} />
            <CoursesSection courses={comingCourses} loading={loadingCourses} />
            <TeacherSection teachers={teams} loading={loadingTeam} />
            <FeaturedSection />
            {/* --------------------------------Testimonial-------------------------------- */}
            <TestimonialSection />
            {/* --------------------------------faq-------------------------------- */}
            <FaqSection questions={questions} loading={loadingQuestion} />
            <GallerySection galleries={galleries} loading={loadingGallery} />
            <CallRegisterSection />
        </main>
    )
}
export default HomePage