import React, { useState } from "react";
import Table from './Table'
import "./Tab.css";
import TableList from "./TableList";
import Dropmenu from "./Dropmenu";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All RFQs
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          ACTIVE
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          ARCHIVE
        </button>
        <button className="button1">CREATE RFQs</button>
        <button className="button2">DRAFTS</button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 1</h2> */}
          {/* <hr /> */}
          <p>
            {/* page 1  */}
            {/* <Table /> */}
            {/* <Example /> */}
            < Dropmenu/>
            <TableList />
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum? */}
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 2</h2> */}
          {/* <hr /> */}
          <p>
            page 2
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci. */}
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 3</h2> */}
          {/* <hr /> */}
          <p>
            page 3
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Tabs;