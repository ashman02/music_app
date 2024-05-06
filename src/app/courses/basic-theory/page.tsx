"use client"
import React from "react"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

const basicCourse = [
  {
    id: 1,
    title: "Guitar Fundamentals",
    slug: "guitar-fundamentals",
    description:
      "Learn the basics of playing guitar with our comprehensive beginner's course.",
    price: 99.99,
    instructor: "John Doe",
    isFeatured: true,
    image: "/courses/guitar.jpg",
  },
  {
    id: 2,
    title: "Piano Essentials",
    slug: "piano-essentials",
    description:
      "Master the fundamentals of piano playing from posture to basic music theory.",
    price: 79.99,
    instructor: "Jane Smith",
    isFeatured: false,
    image: "/courses/piano.jpg",
  },
  {
    id: 3,
    title: "Music Theory 101",
    slug: "music-theory-101",
    description:
      "Get started with the basics of music theory, including notes, scales, and chords.",
    price: 69.99,
    instructor: "David Johnson",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1520446266423-6daca23fe8c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Bass Guitar Basics",
    slug: "bass-guitar-basics",
    description:
      "Learn the foundational skills needed to play bass guitar with confidence.",
    price: 89.99,
    instructor: "Emily Brown",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1543060749-aa3f115aad09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
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
      text: "Basic",
    },
    {
      text: "music",
    },
    {
      text: "theory",
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
