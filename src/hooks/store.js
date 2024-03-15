// Create a file for your Zustand store, e.g., store.js
import create from 'zustand';

const useGlobalState = create((set) => ({
  step: '1',
  currentStage: null,
  imgCache: null,
  pipelineDbItem: {},
  pipelineObject: {},
  imgFor: [],
  setStep: (step) => set({ step }),
  setCurrentStage: (currentStage) => set({ currentStage }),
  setImgCache: (imgCache) => set({ imgCache }),
  setPipelineDbItem: (pipelineDbItem) => set({ pipelineDbItem }),
  setPipelineObject: (pipelineObject) => set({ pipelineObject }),
  setImgFor: (imgFor) => set({ imgFor }),
}));

export default useGlobalState;
