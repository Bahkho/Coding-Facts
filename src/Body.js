import React from "react";
export default function Body(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun Facts About Coding</h1>
      <ul className="main--facts">
        <li>
          The world's first computer programmer was a woman named Ada Lovelace.
          She wrote the first algorithm for Charles Babbage's Analytical Engine
          in 1843.
        </li>

        <li>
          The term "debugging" comes from an incident in 1947 where Grace
          Hopper, a computer programmer, found a moth inside a computer and
          removed it to fix a problem.
        </li>

        <li>
          The first computer virus was created in 1983 by a high school student
          named Fred Cohen.
        </li>

        <li>
          The first website ever created was built in 1991 by Tim Berners-Lee,
          the inventor of the World Wide Web.
        </li>

        <li>
          The programming language Python is named after the Monty Python comedy
          group.
        </li>

        <li>
          The first electronic computer, called the Electronic Numerical
          Integrator and Computer (ENIAC), was created in 1946 and took up an
          entire room.
        </li>

        <li>The programming language Java was originally called Oak.</li>

        <li>
          The term "open source" was coined in 1998 by Christine Peterson to
          describe software that is freely available and can be modified by
          anyone.
        </li>

        <li>
          The first computer mouse was invented by Douglas Engelbart in 1964.
        </li>

        <li>
          The programming language C was developed in 1972 by Dennis Ritchie at
          Bell Labs.
        </li>
      </ul>
    </main>
  );
}
