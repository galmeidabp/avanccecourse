import { CourseCard } from "../../components/home/components/CourseCard";

export function Courses() {
  return (
    <div className="bg-gray-800 my-20 py-20">
      <div className="max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
        <h2 className="text-3xl font-bold">Cursos em destaque <br /> para você</h2>
        <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <CourseCard title="Formação TypeScript Fullstack Developer" imageSrc="/courses/courses-typescript.png" imageAlt="Curso de Typescript" />
          <CourseCard title="Formação GitHub Certification" imageSrc="/courses/courses-github.png" imageAlt="Curso de GitHub" />
          <CourseCard title="Criando seu currículo com HTML e GitHub Pages" imageSrc="/courses/courses-html.png" imageAlt="Curso de HTML" />
          <CourseCard title="UI/UX: Criando a interface do Instagram com Figma" imageSrc="/courses/courses-figma.png" imageAlt="Curso de Figma" />
          <CourseCard title="Multiverso Spider-Man: Criando um site com HTML, CSS e JavaScript" imageSrc="/courses/courses-javascript.png" imageAlt="Curso de JavaScript" />
          <CourseCard title="Criando um App usando sensor de movimento com React Native" imageSrc="/courses/courses-react-native.png" imageAlt="Curso de React Native" />
        </div>
      </div>
    </div>
  )
}