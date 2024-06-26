import { create } from 'zustand';

const useSurveyStore = create((set) => ({
  imgCache: new FormData(),
  step: 1,
  eventDetails: {
    status: 'pending',
  },
  currentStage: null,
  pipelineDbItem: {},
  pipelineObject: {},
  imgFor: [],
  bannerImage: null,
  selectedImage: null,
  lineUpInfo: [],
  sent: false,
  setSent: (sent) => set({ sent }),
  setLineUpInfo: (lineUpInfo) => set({ lineUpInfo }),
  setbannerImage: (bannerImage) => set({ bannerImage }),
  setSelectedImage: (selectedImage) => set({ selectedImage }),
  setImgCache: (imgCache) => set({ imgCache }),
  setStep: (step) => set({ step }),
  setEventDetails: (eventDetails) => set({ eventDetails }),
  setCurrentStage: (currentStage) => set({ currentStage }),
  setPipelineDbItem: (pipelineDbItem) => set({ pipelineDbItem }),
  setPipelineObject: (pipelineObject) => set({ pipelineObject }),
  setImgFor: (imgFor) => set({ imgFor }),
}));

export default useSurveyStore;
