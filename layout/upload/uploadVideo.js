import React, { useState } from 'react';
import styles from '/modules/video/upload/upload.module.scss';
import WatchPageStyles from '/modules/streaming/watch/WatchPage.module.scss';
import { SignIn, Username } from '/modules/onboarding/signin';
import { Player } from '/modules/streaming/watch';
import UploadVideoFileInternal from '/modules/video/upload/UploadVideoFileInternal';
import VideoReel from '/modules/video/upload/VideoReel';
import { HMSDurationToSeconds } from '/modules/utility/utility/date';
import { resolveNestedProperty } from '/modules/util';
import TextareaAutosize from 'react-textarea-autosize';
import Close from '@mui/icons-material/Close';

const Module = (props) => {
  const {
    ASSOCIATE_RECORDS,
    ASSOCIATION_METHODS,
    handleClearError,
    setPageError,
    pageError,
    setProcessing,
    processing,
    handlingMeta,
    setHandlingMetaProxy,
    setVideoDocumentProxy,
    fetchBusy,
    useVideos,
    videosContainerRef,
    loadVideo,
    status,
    componentId,
    initialized,
    videoDocumentRasterized,
    clipStartRef,
    clipDescriptionRef,
    currentAssociation,
    currentAssociationMethod,
    associateRecords,
    setAssociateRecords,
    videoDocument,
    handlePublish,
    handleStartUpload,
    setVideoDocumentRasterized,
    setCurrentAssociationMethod,
    setCurrentAssociation,
    currentAssociationLimit,
    getAssociateAttributes,
    loadRecord,
    handleDisposePlayer,
  } = props;

  const [currentStep, setCurrentStep] = useState(1);

  const updateInput = React.useCallback(
    (e) => {
      const modif = e?.target?.getAttribute('modif');
      let value = e?.target?.value;
      if (modif && videoDocument) {
        const instance = videoDocument.handleUsePayload(value, modif);
        setVideoDocumentProxy(instance);
      }
    },
    [videoDocument, props?._loggedIn?.identifier]
  );

  const inputData = React.useMemo(() => {
    return videoDocumentRasterized && videoDocument?.usePayload
      ? Object.entries(videoDocument.usePayload).map((m, i) => (
          <div className='label_input' key={i}>
            <div className='label_data'>
              {m[1]?.type ? (
                m[1].type === 'string' && m[0] !== 'author' ? (
                  <div className='flex flex-col w-full'>
                    <label>
                      {m[0].toUpperCase
                        ? `${m[0].charAt(0).toUpperCase()}${
                            m[0].length > 1
                              ? m[0].substring(1, m[0].length)
                              : ''
                          }`
                        : ''}
                    </label>
                    <input
                      className={`p-8 mt-2 uploadPage_${m[0]} ${
                        m[1].readonly ? 'input_readonly' : null
                      }`}
                      type='text'
                      selectelement={`${componentId}-${m[0]}`}
                      disabled={m[1].readonly}
                      modif={m[0]}
                      placeholder='Title (required)'
                      onChange={updateInput}
                    />
                  </div>
                ) : m[1].type === 'text' ? (
                  <div className='flex flex-col w-full mt-8'>
                    <label>
                      {m[0].toUpperCase
                        ? `${m[0].charAt(0).toUpperCase()}${
                            m[0].length > 1
                              ? m[0].substring(1, m[0].length)
                              : ''
                          }`
                        : ''}
                    </label>
                    <TextareaAutosize
                      className={`p-8 mt-2 uploadPage_${m[0]} ${
                        m[1].readonly ? 'input_readonly' : null
                      }`}
                      selectelement={`${componentId}-${m[0]}`}
                      minRows={m[1]?.rows ?? 2}
                      disabled={m[1].readonly}
                      modif={m[0]}
                      placeholder='Tell viewers about your video content'
                      onChange={updateInput}
                    />
                  </div>
                ) : m[1].type === 'array' &&
                  m[1].item === 'string' /* // Comment out tags input
                  <div className='flex flex-col w-full'>
                    <label>
                      {m[0].toUpperCase
                        ? `${m[0].charAt(0).toUpperCase()}${
                            m[0].length > 1
                              ? m[0].substring(1, m[0].length)
                              : ''
                          }`
                        : ''}
                    </label>
                    <div className='label_data_container'>
                      <TextareaAutosize
                        className={`uploadPage_${m[0]} ${
                          m[1].readonly ? 'input_readonly' : null
                        }`}
                        selectelement={`${componentId}-${m[0]}`}
                        minRows={m[1]?.rows ?? 2}
                        disabled={m[1].readonly}
                        modif={m[0]}
                        onChange={updateInput}
                      />
                      {resolveNestedProperty(videoDocumentRasterized, m[1].path)
                        ?.map ? (
                        <div
                          className='tagContainer'
                          style={{ marginTop: '.25rem' }}
                        >
                          {resolveNestedProperty(
                            videoDocumentRasterized,
                            m[1].path
                          ).map((d, i) => {
                            return d !== '' ? (
                              <div className='tagItem' key={i}>
                                {d}
                              </div>
                            ) : (
                              <div></div>
                            );
                          })}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  */ ? null : m[1].type === 'date' /* // Comment out date input
                  <React.Fragment>
                    <label>
                      {m[0].toUpperCase
                        ? `${m[0].charAt(0).toUpperCase()}${
                            m[0].length > 1
                              ? m[0].substring(1, m[0].length)
                              : ''
                          }`
                        : ''}
                    </label>
                    <input
                      type='date'
                      className={`uploadPage_${m[0]} ${
                        m[1].readonly ? 'input_readonly' : null
                      }`}
                      selectelement={`${componentId}-${m[0]}`}
                      disabled={m[1].readonly}
                      modif={m[0]}
                      onChange={updateInput}
                    />
                  </React.Fragment>
                  */ ? null : null
              ) : null}
            </div>
          </div>
        ))
      : null;
  }, [videoDocumentRasterized, videoDocument]);

  const handleDeleteClip = React.useCallback((e) => {
    if (e?.currentTarget?.getAttribute('identifier')) {
      videoDocument.deleteClip(e.currentTarget.getAttribute('identifier'));
      setVideoDocumentRasterized(videoDocument.getInstance());
    }
  });

  const secondsToHMSString = (time) => {
    const HMS = {
      hours: Math.floor(time / 3600),
      minutes: Math.floor((time % 3600) / 60),
      seconds: time % 60,
    };
    if (HMS) {
      return `${
        HMS.hours > 0 ? `${String(HMS.hours).padStart(2, '0')}:` : ''
      }${String(HMS.minutes).padStart(2, '0')}:${String(HMS.seconds).padStart(
        2,
        '0'
      )}`;
    }
    return '';
  };

  const clipsRender = React.useMemo(() => {
    return (
      <div
        className={`${WatchPageStyles.clipsContainer} Upload_ClipsContainer`}
      >
        {videoDocumentRasterized?.timeline
          ?.filter((m) => m['type'] === 'clip')
          ?.map((m, i) => (
            <div
              className={`${WatchPageStyles.clipViewContainer} Upload_ClipViewContainer`}
              key={i}
            >
              <div
                className={`${WatchPageStyles.clipViewStart} Upload_ClipViewStart`}
              >
                {secondsToHMSString(m.startOffset)}
              </div>
              <div
                className={`${WatchPageStyles.clipViewNameContainer} Upload_ClipViewNameContainer`}
              >
                <div
                  className={`${WatchPageStyles.clipViewName} Upload_ClipViewName`}
                >
                  {m.name}
                </div>
                <Close
                  className={'close'}
                  onClick={handleDeleteClip}
                  modif='close'
                  identifier={m.id}
                  style={{ cursor: 'pointer' }}
                ></Close>
              </div>
            </div>
          ))}
      </div>
    );
  }, [videoDocumentRasterized?.timeline, handleDeleteClip]);

  const handleAddClip = React.useCallback((e) => {
    const seconds = HMSDurationToSeconds(clipStartRef?.current.value);
    const description = clipDescriptionRef.current.value;
    if (!isNaN(seconds)) {
      videoDocument.addClip(
        props,
        seconds,
        description,
        `https://${props.domainUrl}/w?u=${videoDocument.id}&time=${seconds}`
      );
      clipStartRef.current.value = '00:00';
      clipDescriptionRef.current.value = '';
      setVideoDocumentRasterized(videoDocument.getInstance());
    }
  });

  const handleSetClipTimeInput = React.useCallback((e) => {
    let r = HMSDurationToSeconds(e?.currentTarget.value);
    let value = '00:00';
    if (r !== null && e?.key && ['ArrowUp', 'ArrowDown'].indexOf(e.key) > -1) {
      if (e.key == 'ArrowUp') {
        r += 1;
      } else if (e.key == 'ArrowDown') {
        r -= 1;
      }
      if (r > 0) {
        const HMS = {
          hours: Math.floor(r / 3600),
          minutes: Math.floor((r % 3600) / 60),
          seconds: r % 60,
        };
        value = `${
          HMS.hours > 0 ? `${String(HMS.hours).padStart(2, '0')}:` : ''
        }${String(HMS.minutes).padStart(2, '0')}:${String(HMS.seconds).padStart(
          2,
          '0'
        )}`;
      }
      e.target.value = value;
    }
  });

  props._LocalEventEmitter.unsubscribe('reset_upload')
  props._LocalEventEmitter.subscribe('reset_upload', e => {
      if (e) {
        loadRecord(videoDocument);
      }
  });

  const handleStepChange = (step) => {
    handleDisposePlayer(); // This sets initialized = false
    setCurrentStep(step);
    setTimeout(() => {
      props._LocalEventEmitter.dispatch('reset_upload', {});
    }, 150);
  };

  /** Will set authorization by association to a product */
  const handleSetAuthorize = () => {
    const id = '' // The id of the product/ticket to authorize the video by
    const association = 'product'
    let r = videoDocument.setAuthorizedBy(id, association, true)
    setVideoDocumentProxy(r)
  }

  const handleSetCurrentAssociationOption = React.useCallback((e) => {
    if (e?.currentTarget?.value) {
      const value = e.currentTarget.value;
      const limit =
        value === currentAssociation ? currentAssociationLimit + 10 : 10;
      setCurrentAssociation(value);
      getAssociateAttributes(value, limit);
    }
  });

  const handleLoadMoreAssociateRecords = React.useCallback((e) => {
    getAssociateAttributes(currentAssociation, currentAssociationLimit + 10);
  });

  const handleSetAuthorizationMethod = React.useCallback((e) => {
    if (e?.currentTarget?.getAttribute('modif')) {
      const modif = e.currentTarget.getAttribute('modif');
      setCurrentAssociationMethod(modif);
    }
  });
  console.log('stp', currentStep, 'asdajsasdasdasdjkdja');
  console.log('Video', videoDocument, componentId, initialized)

  const handleAssociateRecord = React.useCallback((e) => {
    if (e?.currentTarget?.id) {
      const id = e.currentTarget.id;
      const m = associateRecords.find((n) => n.id === id);
      const doSet =
        e?.currentTarget?.getAttribute('unsetrecord') === 'false'
          ? true
          : false;
      if (m) {
        if (currentAssociationMethod === 'authorize') {
          let r = videoDocument.setAuthorizedBy(
            m.id,
            currentAssociation,
            doSet
          );
          setVideoDocumentProxy(r);
        } else {
          let r = videoDocument.setAssociation(
            m.id,
            currentAssociation,
            doSet,
            currentAssociationMethod
          );
          setVideoDocumentProxy(r);
        }
        setAssociateRecords(associateRecords);
      }
    }
  });

  const checkAssociationSelected = (id, useMethod, ofType) => {
    const p = useMethod === 'authorize' ? 'authBy' : 'associations';
    const detail = p === 'authBy' ? 'authorize' : useMethod;
    if (
      videoDocument?.meta &&
      videoDocument?.meta[p] &&
      videoDocument.meta[p][ofType] &&
      videoDocument.meta[p][ofType][id] &&
      videoDocument.meta[p][ofType][id][detail]
    ) {
      return true;
    }
    return false;
  };

  console.log('Video', videoDocument, componentId, initialized)

  const renderStepContent = () => {
    console.log('Render Step Content', videoDocument, componentId, initialized)
    switch (currentStep) {
      case 1:
        return (
          <div className='flex flex-col lg:flex-row gap-8 rounded-[8px]'>
            <div
              className={`${WatchPageStyles.uploadMetaContainer} Video_UploadMetaContainer min-w-[50%]`}
            >
              <div
                className={`${WatchPageStyles.uploadMetaPrimaryContainer} Video_UploadMetaPrimaryContainer`}
              >
                <p className='mb-4 font-semibold'>Details</p>
                {inputData}
              </div>
            </div>
            <div
              className={`${styles.videoContainer} Video_VideoUploadContainer`}
            >
              <div
                className={`${WatchPageStyles.videoQuadrant} ${WatchPageStyles.videoQuadrantSimple} WatchPage_VideoQuadrant`}
                style={{ height: `calc(100vh - ${props?.menuHeight})` }}
              >
                <div
                  className={`${styles.videoMessageContainer} Video_MessageContainer`}
                >
                  <p
                    className={`${styles.videoMessage} ${
                      status?.message ? styles.videoMessageVisible : null
                    }`}
                  >
                    {status.message}
                  </p>
                </div>
                <Player
                  {...props}
                  playerName={componentId ? `player-${componentId}` : null}
                  playerInitialized={initialized}
                />
                <div className='px-4 py-4 bg-dashSides rounded-b-lg'>
                  <p className='text-dashtext'>File Name</p>
                  <p>Asake Concert.mp4</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='step-2'>
            <div className={''}>
              <div
                className={`${WatchPageStyles.videoQuadrant} ${WatchPageStyles.videoQuadrantSimple} WatchPage_VideoQuadrant`}
                style={{ height: `calc(100vh - ${props?.menuHeight})` }}
              >
                <div className='my-8'>
                  <Player
                    {...props}
                    playerName={componentId ? `player-${componentId}` : null}
                    playerInitialized={initialized}
                  />
                </div>
              </div>
            </div>
            {videoDocumentRasterized?.timeline?.map ? (
              <div>
                <div className='flex gap-p5' style={{ marginBottom: '.5rem' }}>
                  <div>
                    <h5 style={{ width: '100%', marginBottom: '.5rem' }}>
                      Capture the start and end moments of each chapter
                    </h5>
                    <input
                      className={`px-4 ${WatchPageStyles.clipStart} Upload_ClipStart`}
                      defaultValue={'00:00'}
                      type='time'
                      min='09:00'
                      max='18:00'
                      onKeyDown={handleSetClipTimeInput}
                      ref={clipStartRef}
                    />
                  </div>
                  <div>
                    <h5 style={{ width: '100%', marginBottom: '.5rem' }}>
                      Give this chapter a recognizable title
                    </h5>
                    <div className='flex gap-p5'>
                      <input
                        className={`${WatchPageStyles.clipDescriptiveTitle} Upload_ClipDescriptiveTitle`}
                        placeholder='Clip Description'
                        type='text'
                        ref={clipDescriptionRef}
                      />
                      <button
                        onClick={handleAddClip}
                        className='bg-accentY px-4'
                        style={{ textWrap: 'nowrap' }}
                      >
                        Add Caption
                      </button>
                    </div>
                  </div>
                </div>
                {clipsRender}
              </div>
            ) : null}
          </div>
        );
      case 3:
        return (
          <div>
            {videoDocument?.status ? (
              videoDocument.status === 'processing' ? (
                <div>
                  <h4>Your video is processing</h4>
                </div>
              ) : ['ready', 'good'].indexOf(videoDocument.status) > -1 ? (
                <div>
                  <h4>Your video is ready to be published</h4>
                </div>
              ) : videoDocument.status === 'published' ? (
                <div>
                  <h4>
                    Your video was published{' '}
                    {new Date(Number(videoDocument.publish))?.toDateString() ??
                      ''}
                  </h4>
                </div>
              ) : null
            ) : null}
            <div>
              <div className='flex gap-p5' style={{ paddingBottom: '.5rem' }}>
                {videoDocument?.status &&
                ['ready', 'good'].indexOf(videoDocument.status) > -1 ? (
                  <button
                    className='Video_PublishButton'
                    onClick={handlePublish}
                    modif='publish'
                  >
                    Publish
                  </button>
                ) : null}
                {videoDocument ? (
                  <button
                    className={`Video_UpdateButton ${
                      Object.entries(videoDocument?.updatedFields).length > 0
                        ? `${WatchPageStyles.UploadChangesWaiting} Upload_UploadChangesWaiting`
                        : ''
                    }`}
                    onClick={handlePublish}
                    modif='update'
                  >
                    Update
                  </button>
                ) : null}
                {videoDocument?.status === 'published' ? (
                  <React.Fragment>
                    {videoDocument?.meta?.private ? (
                      <button
                        className='Video_UnprivateButton'
                        onClick={handlePublish}
                        modif='unprivate'
                      >
                        Unprivate
                      </button>
                    ) : (
                      <button
                        className='Video_PrivateButton'
                        onClick={handlePublish}
                        modif='private'
                      >
                        Make Private
                      </button>
                    )}
                    <button
                      className='Video_UnpublishButton'
                      onClick={handlePublish}
                      modif='unpublish'
                    >
                      Unpublish
                    </button>
                  </React.Fragment>
                ) : null}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.container} ${props.className} Upload_Container`}>
      {/* <h3>Upload</h3> */}
      {!props?._loggedIn ? (
        <SignIn {...props}></SignIn>
      ) : props._loggedIn && !props._loggedIn?.username ? (
        <Username {...props}></Username>
      ) : null}
      {props?._loggedIn?.username ? (
        <div>
          {pageError ? (
            <div
              className='error'
              style={{ margin: '.25rem', marginBottom: '0' }}
              onClick={handleClearError}
            >
              {pageError.message}
            </div>
          ) : null}
          {!handlingMeta ? (
            <div>
              <UploadVideoFileInternal
                {...props}
                setProcessing={setProcessing}
                processing={processing}
                handlingMeta={handlingMeta}
                setHandlingMeta={setHandlingMetaProxy}
                setVideoDocumentProxy={setVideoDocumentProxy}
              />
            </div>
          ) : null}
          {/* <VideoReel
            {...props}
            fetchBusy={fetchBusy}
            useVideos={useVideos}
            videosContainerRef={videosContainerRef}
            loadVideo={loadVideo}
          /> */}
          {/* //This section needs to be a modal */}
          <div
            class='Modal_container'
            className='absolute top-0 left-0 w-full bg-dashBg border-2 rounded-[10px] p-8 min-h-[600px]'
            style={{ display: handlingMeta ? 'block' : 'none' }}
          >
            <div>
              <div className='relative flex justify-center items-center mb-8'>
                <p className='absolute left-0 font-bold text-lg'>
                  Upload Video
                </p>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-2 sm:gap-4'>
                    <div
                      className={`rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-medium text-sm sm:text-base
                      ${
                        currentStep >= 1
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      1
                    </div>
                    <div
                      className={`h-1 w-8 sm:w-12 ${
                        currentStep > 1 ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                    <div
                      className={`rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-medium text-sm sm:text-base
                      ${
                        currentStep >= 2
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      2
                    </div>
                    <div
                      className={`h-1 w-8 sm:w-12 ${
                        currentStep > 2 ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                    <div
                      className={`rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-medium text-sm sm:text-base
                      ${
                        currentStep === 3
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      3
                    </div>
                  </div>
                </div>
              </div>

              {renderStepContent()}

              <div className='modal-footer flex justify-end mt-12 gap-4'>
                {currentStep > 1 && (
                  <button
                    className='bg-dashSides text-white'
                    onClick={() => handleStepChange(currentStep - 1)}
                  >
                    Previous
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    className='dark:bg-white text-black px-4'
                    onClick={() => handleStepChange(currentStep + 1)}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className='Video_UploadButton dark:bg-white text-black px-4 rounded-sm'
                    onClick={handleStartUpload}
                  >
                    Finish Upload
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* //Modal ends here */}
        </div>
      ) : null}
    </div>
  );
};

export default Module;
