"use client"
import React from "react"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

const basicCourse = [
  {
    id: 13,
    title: "Electronic Music Production",
    slug: "electronic-music-production",
    description:
      "Learn how to produce electronic music from start to finish, including beat-making, synthesis, and arrangement.",
    price: 129.99,
    instructor: "Mark Johnson",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1624703307604-744ec383cbf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    title: "Mixing and Mastering Techniques",
    slug: "mixing-and-mastering-techniques",
    description:
      "Master the art of mixing and mastering and learn how to polish your tracks for professional release.",
    price: 149.99,
    instructor: "Emily Clark",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    title: "Recording Studio Essentials",
    slug: "recording-studio-essentials",
    description:
      "Discover essential techniques for recording music in a studio environment, including mic placement and signal flow.",
    price: 109.99,
    instructor: "Michael Smith",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1559732277-7453b141e3a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    title: "Sampling Techniques Workshop",
    slug: "sampling-techniques-workshop",
    description:
      "Dive deep into the art of sampling and learn how to creatively use samples in your music productions.",
    price: 119.99,
    instructor: "Jessica Brown",
    isFeatured: false,
    image:
      "https://images.unsplash.com/photo-1627773755683-dfcf2774596a?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      text: "Music",
    },
    {
      text: "production",
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
