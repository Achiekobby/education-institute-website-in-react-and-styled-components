import React from 'react'
import CoursesCategory from './CoursesCategory/CoursesCategory'
import CoursesPreview from './CoursesPreview/CoursesPreview'
import GeneralInfo from './GeneralInfo/GeneralInfo'

const Course = () => {
    return (
        <>
            <CoursesPreview/>
            <CoursesCategory/>
            <GeneralInfo/>
        </>
    )
}

export default Course
