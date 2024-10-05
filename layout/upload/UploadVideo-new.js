import React from 'react';
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
  } = props;

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
                      className={`uploadPage_${m[0]} ${
                        m[1].readonly ? 'input_readonly' : null
                      }`}
                      type='text'
                      selectelement={`${componentId}-${m[0]}`}
                      disabled={m[1].readonly}
                      modif={m[0]}
                      onChange={updateInput}
                    />
                  </React.Fragment>
                ) : m[1].type === 'text' ? (
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
                  </React.Fragment>
                ) : m[1].type === 'array' && m[1].item === 'string' ? (
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
                  </React.Fragment>
                ) : m[1].type === 'date' ? (
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
                ) : null
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

  return (
    <div
      className={`${styles.container} ${props.className} Upload_Container PagePadding`}
    >
      <h3>Upload</h3>
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
          <VideoReel
            {...props}
            fetchBusy={fetchBusy}
            useVideos={useVideos}
            videosContainerRef={videosContainerRef}
            loadVideo={loadVideo}
          />
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
          <div style={{ display: handlingMeta ? 'block' : 'none' }}>
            <div
              className={`${styles.videoContainer} Video_VideoUploadContainer`}
              style={{ marginBottom: '1rem' }}
            >
              <div
                className={`${WatchPageStyles.videoQuadrant} ${WatchPageStyles.videoQuadrantSimple} WatchPage_VideoQuadrant`}
                style={{ height: `calc(100vh - ${props?.menuHeight})` }}
              >
                <Player
                  {...props}
                  playerName={componentId ? `player-${componentId}` : null}
                  playerInitialized={initialized}
                />
              </div>
            </div>
            <div
              className={`${WatchPageStyles.uploadMetaContainer} Video_UploadMetaContainer`}
            >
              <div
                className={`${WatchPageStyles.uploadMetaPrimaryContainer} Video_UploadMetaPrimaryContainer`}
              >
                {inputData}
              </div>
              <div style={{ maxWidth: 'min-content' }}>
                {videoDocumentRasterized?.timeline?.map ? (
                  <div>
                    <div
                      className='flex gap-p5'
                      style={{ marginBottom: '.5rem' }}
                    >
                      <div>
                        <h5 style={{ margin: 0, marginBottom: '.5rem' }}>
                          Add a clip
                        </h5>
                        <input
                          className={`${WatchPageStyles.clipStart} Upload_ClipStart`}
                          defaultValue={'00:00'}
                          onKeyDown={handleSetClipTimeInput}
                          ref={clipStartRef}
                        />
                      </div>
                      <div>
                        <h5 style={{ margin: 0, marginBottom: '.5rem' }}>
                          Describe this section of the video
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
                            style={{ textWrap: 'nowrap' }}
                          >
                            Add Clip
                          </button>
                        </div>
                      </div>
                    </div>
                    {clipsRender}
                  </div>
                ) : null}
                {videoDocumentRasterized?.meta ? (
                  <div>
                    <div>
                      <div
                        className='flex gap-p2'
                        style={{
                          alignItems: 'center',
                          margin: '0px 0px 0.5rem',
                        }}
                      >
                        <h5 style={{ margin: '0' }}>Associate with</h5>
                        <select
                          style={{ borderRadius: '1rem' }}
                          onChange={handleSetCurrentAssociationOption}
                        >
                          {ASSOCIATE_RECORDS.map((m, i) => {
                            return (
                              <option
                                value={m}
                                className={`style_option ${
                                  currentAssociation === m
                                    ? 'option_currently_selected'
                                    : ''
                                }`}
                                key={i}
                              >
                                {m}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div
                        className='flex gap-p2'
                        style={{ marginBottom: '.5rem' }}
                      >
                        {ASSOCIATION_METHODS.map
                          ? ASSOCIATION_METHODS.map((m, i) => (
                              <div
                                onClick={handleSetAuthorizationMethod}
                                modif={m}
                                key={i}
                              >
                                <button
                                  className={`${
                                    currentAssociationMethod === m
                                      ? `${WatchPageStyles.currentSelected} Upload_currentSelected`
                                      : ''
                                  }}`}
                                >{`${m.charAt(0).toUpperCase()}${m.substring(
                                  1,
                                  m.length
                                )}`}</button>
                              </div>
                            ))
                          : null}
                      </div>
                    </div>
                    <div>
                      {associateRecords?.map ? (
                        <div>
                          <div
                            className='flex gap-p5'
                            style={{ flexWrap: 'wrap' }}
                          >
                            {associateRecords.map((m, i) => (
                              <div
                                className={`item_container ${
                                  checkAssociationSelected(
                                    m.id,
                                    currentAssociationMethod,
                                    currentAssociation
                                  )
                                    ? `${WatchPageStyles.currentSelected} Upload_currentSelected`
                                    : ''
                                }`}
                                key={i}
                                id={m.id}
                                unsetrecord={`${checkAssociationSelected(
                                  m.id,
                                  currentAssociationMethod,
                                  currentAssociation
                                )}`}
                                onClick={handleAssociateRecord}
                              >
                                <label
                                  style={{
                                    cursor: 'pointer',
                                    fontSize: '.8rem',
                                  }}
                                >
                                  {m?.title ?? m?.name ?? m.id}
                                </label>
                              </div>
                            ))}
                          </div>
                          <button onClick={handleLoadMoreAssociateRecords}>
                            Load more
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
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
                <button
                  className='Video_UploadButton'
                  onClick={handleStartUpload}
                >
                  Upload New
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Module;
