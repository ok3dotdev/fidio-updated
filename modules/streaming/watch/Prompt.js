import React from"react";import WatchPageStyles from"./WatchPage.module.scss";import{isObjectEmpty}from"../../util";const Module=e=>React.createElement("div",{className:`${e?.className??""} ${WatchPageStyles.streamLeadPrompt} ${isObjectEmpty(e?.streamLeadPrompt)?"":WatchPageStyles.streamLeadPrompt_Visible} WatchPage_StreamLeadPrompt`,ref:e?.authContainer},e?.streamLeadPrompt?React.createElement("div",null,e?.streamLeadPrompt?.lead?React.createElement("div",null,e.streamLeadPrompt.lead):null,e?.streamLeadPrompt?.description?React.createElement("div",null,e.streamLeadPrompt.description):null,e?.streamLeadPrompt?.password?React.createElement("div",null,e.streamLeadPrompt.password):null,e?.streamLeadPrompt?.tags?React.createElement("div",null,e.streamLeadPrompt.tags):null,e?.streamLeadPrompt?.tagsList?React.createElement("div",null,e.streamLeadPrompt.tagsList):null):null);export default Module;