"use client";
import Link from "next/link";
import courseData from "../data/music_data.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const CoursesSections = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-20 bg-gray-900 px-10">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-bold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-24">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="py-4 sm:py-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600  flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`} className="pt-5 hover:underline">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-black cursor-pointer text-white  border-transparent"
          >
            View All Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CoursesSections;
