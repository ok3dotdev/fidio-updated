// Create a file for your Zustand store, e.g., store.js
import { create } from 'zustand';

const useGlobalState = create((set) => ({
  answers: {},
  currentStage: null,
  pipelineDbItem: {},
  pipelineObject: {},
  imgFor: [],
}));

export default useGlobalState;
