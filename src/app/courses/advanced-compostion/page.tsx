"use client"
import React from "react"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

const basicCourse = [
    {
      "id": 5,
      "title": "Jazz Improvisation Mastery",
      "slug": "jazz-improvisation-mastery",
      "description": "Dive deep into jazz improvisation techniques and take your playing to the next level.",
      "price": 119.99,
      "instructor": "Michael Davis",
      "isFeatured": true,
      "image": "/courses/jazz.jpg"
    },
    {
      "id": 6,
      "title": "Orchestration Techniques",
      "slug": "orchestration-techniques",
      "description": "Explore the art of orchestration and learn how to arrange music for various instruments and ensembles.",
      "price": 139.99,
      "instructor": "Sophia Miller",
      "isFeatured": false,
      "image": "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 7,
      "title": "Advanced Music Theory",
      "slug": "advanced-music-theory",
      "description": "Delve into complex music theory concepts and enhance your understanding of harmony, counterpoint, and more.",
      "price": 99.99,
      "instructor": "Daniel Brown",
      "isFeatured": true,
      "image": "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 8,
      "title": "Film Scoring Essentials",
      "slug": "film-scoring-essentials",
      "description": "Learn the fundamentals of scoring music for film and enhance your skills in creating cinematic soundtracks.",
      "price": 149.99,
      "instructor": "Alexandra Carter",
      "isFeatured": false,
      "image": "https://images.unsplash.com/photo-1466428996289-fb355538da1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: string
  isFeatured: boolean
  image: string
}

const page = () => {
  interface Word {
    text: string
    className?: string
  }

  const word: Word[] = [
    {
      text: "Advanced",
    },
    {
      text: "composition",
    },
    {
      text: "Courses",
      className: "text-[#c72e2e] dark:text-[#c72e2e]",
    },
  ]

  return (
    <>
    <div className="mt-36 flex items-center justify-center">
        <TypewriterEffectSmooth words={word} />
    </div>
      <div className="flex flex-wrap items-center justify-center mt-20">
        {basicCourse.map((course: Course) => (
          <CardContainer key={course.id} className="inter-var mx-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  )
}

export default page
