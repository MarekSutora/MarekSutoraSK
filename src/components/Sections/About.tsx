import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="p-[1px] gap-3 flex flex-col">
      <p className="text-lg">
        I am a graduate of the Faculty of Management and Informatics with
        experience in front-end and back-end web application development and
        working with databases. In each of these areas, I have worked with
        various technologies and tools. I also have experience with team
        collaboration and agile software development.
      </p>
      <p className="text-lg">
        I consider myself a reliable and hardworking person who has no problem
        learning different new and interesting technologies and tools. In my
        free time, I enjoy exercising, listening to music, watching series,
        movies, and various sports.
      </p>
      <p className="text-lg">
        I also like reading non-fiction literature and occasionally playing
        computer games.
      </p>
    </div>
  );
};

export default About;
