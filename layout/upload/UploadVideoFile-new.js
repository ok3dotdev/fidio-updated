import React from 'react';
import styles from '/modules/video/upload/upload.module.scss';

const Module = (props) => {
  const {
    dropHandler,
    dropHandlerOver,
    dropHandlerEnd,
    draggingOver,
    fileInput,
    doUpload,
    beginUpload,
    pageError,
    handleClearError,
    loadingBar,
    processing,
    currentVideo,
    fileProgress,
    fetchBusy,
  } = props;
  return (
    <div
      onDrop={dropHandler}
      onDragOver={dropHandlerOver}
      onDragEnd={dropHandlerEnd}
      onDragLeave={dropHandlerEnd}
    >
      {!processing && props?._loggedIn?.username && !currentVideo ? (
        <div
          className={`${styles.fileUploadContainerExternal} ${
            draggingOver ? `${styles.fileUploadContainerDragging}` : null
          }`}
          style={{ minHeight: 75 + 'vh', display: 'flex' }}
        >
          <div
            className={`${styles.fileUploadContainer}`}
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            <div
              className={`${
                fetchBusy
                  ? `fetchNotBusy ${styles.fileUploadFetchBusy}`
                  : 'fetchNotBusy'
              }`}
            ></div>
            <div style={{ margin: 'auto' }}>
              <label>
                <input
                  style={{ fontSize: 1 + 'rem', display: 'none' }}
                  type='file'
                  name='fileToUpload'
                  id='fileToUpload'
                  ref={fileInput}
                  onChange={doUpload}
                />
                <div className={`${styles.uploadPrompt}`}>
                  <h4>Drag and drop your video to upload</h4>
                  <p style={{ fontSize: '1rem' }}>
                    Your video will be private until you decide to publish it
                  </p>
                  <button
                    className={`${styles.mainInteractionPurple}`}
                    style={{
                      padding: 0.5 + 'rem ' + 6 + 'rem',
                      margin: 0 + ' auto',
                      marginTop: 2 + 'rem',
                      marginBottom: 0 + 'rem',
                    }}
                    onClick={beginUpload}
                  >
                    Upload Video
                  </button>
                  <div
                    style={{
                      width: 100 + '%',
                      paddingTop: 1 + 'rem',
                      paddingBottom: 0.5 + 'rem',
                    }}
                  >
                    <div
                      className={`${styles.loadingBar}`}
                      ref={loadingBar}
                    ></div>
                  </div>
                </div>
              </label>
            </div>
            {pageError?.message ? (
              <div
                className='error'
                style={{ margin: '.25rem', marginBottom: '0' }}
                onClick={handleClearError}
              >
                {pageError.message}
              </div>
            ) : null}
          </div>
        </div>
      ) : processing ? (
        typeof fileProgress === 'number' && fileProgress > -1 ? (
          <div>
            <div className={`${styles.loadingMetaContainer}`}>
              <h4>Uploading Video</h4>
              <div
                className={`${styles.loadingBarContainer} Video_LoadingBarContainer`}
              >
                <div
                  className={`${styles.loadingBar} Video_LoadingBar`}
                  ref={loadingBar}
                >
                  <div
                    className={`${styles.loadingBarText} Video_LoadingBarText`}
                  >
                    {fileProgress}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default Module;
