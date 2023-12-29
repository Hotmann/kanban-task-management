import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSubtask,
  updateTaskStatus,
} from "../../redux/modal/modalActions";
import { showModal } from "../../redux/modal/modalSelectors";
import { Subtask, Task } from "../../redux/types";
import Modal from "../../components/Modal";
import Status from "../../components/Status";

interface EditTaskProps {
  onClose: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(showModal);
  const [newSubtask, setNewSubtask] = useState<string>("");

  const removeSubtask = (subtask: Subtask) => {
    // Dispatch an action to remove the subtask
    // You can use the existing updateSubtask action here
    const updatedSubtask = { ...subtask, isCompleted: true };
    dispatch(updateSubtask(updatedSubtask));
  };

  const addSubtask = () => {
    if (newSubtask.trim() !== "") {
      // Dispatch an action to add a new subtask
      const subtask: Subtask = { title: newSubtask, isCompleted: false };
      dispatch(updateSubtask(subtask));
      setNewSubtask(""); // Clear the input field
    }
  };

  const updateStatus = (newStatus: string) => {
    // Dispatch an action to update the task status
    // You can use the existing updateTaskStatus action here
    dispatch(updateTaskStatus(newStatus));
  };

  const saveChanges = () => {
    // Additional logic to save changes if needed
    onClose(); // Close the modal after saving changes
  };

  return (
    <Modal>
      <form className="AddNewTask">
        <div className="AddNewTask__topWrapper">
          <h2>Edit Task</h2>
        </div>

        <Status
          currentStatus={selectedTask?.status || ""}
          onUpdateStatus={updateStatus}
        />
        <button type="submit">
          <span>Save Changes</span>
        </button>
      </form>
    </Modal>
  );
};

export default EditTask;

// return (
//     <motion.form
//       ref={formRef}
//       variants={editTaskVariants}
//       className={styles['edit-task']}
//       onSubmit={handleSubmit}
//     >
//       <span className={styles.title}>Edit Task</span>
//       <label htmlFor="task-title">title</label>
//       <div className={styles['title-input']}>
//         <input
//           type="text"
//           onChange={handleChange}
//           name="title"
//           value={formData.title}
//           aria-required={true}
//           id="task-title"
//           aria-invalid={!formData.isValid}
//         />
//         {!formData.isValid && (
//           <span data-testid="task-title-error" style={{ color: 'red' }}>
//             {formData.errorMessage}
//           </span>
//         )}
//       </div>
//       <label htmlFor="description">description</label>
//       <textarea id="description" onChange={handleChange} name="description" />

//       <fieldset>
//         <legend>Subtasks</legend>
//         {formData.subtasks.map((subtask) =>(
//           <DeletableInput
//             key={subtask.id}
//             id={subtask.id}
//             validationError={subtask.validationError}
//             value={subtask.title}
//             handleChange={changeSubtaskInput}
//             removeInput={removeSubtask}
//             isValid={subtask.isValid}
//           />
//         )
//         )}
//       </fieldset>
//       <Button
//         type='secondary'
//         hasSvg={true}
//         svgId='add-icon'
//         label='Add New Subtask'
//         handleClick={addSubtask}
//         style={{
//           width: '100%'
//         }}
//       />

//       <Status
//         options={statusOptions}
//         handleChange={handleChange}
//         name="status"
//         value={formData.status}
//         label="status"
//       />
//       <button type="submit">
//         <span>Save Changes</span>
//       </button>
//     </motion.form>
//   )
