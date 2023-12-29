import { RootState } from "../rootReducer";

export const showModal = (state: RootState) => state.modal.selectedTask;
