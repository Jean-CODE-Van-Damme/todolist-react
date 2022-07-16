import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt, faTrash);

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const copyTaskList = [...taskList];

  return (
    <div>
      <Header title=" 💄 Audrey To Do List 👠" />

      <Form
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
        copyTaskList={copyTaskList}
      />

      <div className="heart">♥️</div>
    </div>
  );
}

export default App;
