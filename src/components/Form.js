import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({ task, setTask, taskList, setTaskList, copyTaskList }) => {
  return (
    <>
      <div className="big-div">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (task.length > 0) {
              const obj = { label: task, isDone: false };
              copyTaskList.push(obj);
              setTaskList(copyTaskList);
              setTask("");
            }
          }}
        >
          <div className="tab">
            {taskList.map((element, index) => {
              return (
                <div className="checkbox" key={index}>
                  <input
                    checked={element.isDone ? true : false}
                    onChange={(event) => {
                      // !!!
                      copyTaskList[index].isDone = !copyTaskList[index].isDone;
                      setTaskList(copyTaskList);
                    }}
                    type="checkbox"
                  />
                  <p className={element.isDone === true ? "line-trought" : ""}>
                    {element.label}
                  </p>

                  <span
                    onClick={() => {
                      copyTaskList.splice(index, 1);
                      setTaskList(copyTaskList);
                    }}
                  >
                    <FontAwesomeIcon icon="trash" />
                  </span>
                </div>
              );
            })}
          </div>
          <input
            className="input"
            type="text"
            placeholder="Boire des cocktails avec la famille"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />

          <button className="submit">Add task</button>
        </form>
      </div>
    </>
  );
};

export default Form;
