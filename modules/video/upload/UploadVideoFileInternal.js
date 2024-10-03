function _extends() {
  return (_extends = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a,
            r = arguments[t];
          for (a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        }
        return e;
      }).apply(this, arguments);
}
import React from 'react';
import { logout } from '/modules/utility/onboarding/SignIn';
import UploadVideoFile from '/layout/upload/UploadVideoFile.js';
import axios from 'axios';
const MAX_UPLOAD_TIME = 36e5,
  Module = (n) => {
    const [t, i] = React.useState(!1),
      [e, d] = React.useState(null),
      [a, r] = React.useState(!1),
      [l, c] = React.useState(-1),
      u = React.useRef(),
      g = React.useRef(),
      p = React.useRef();
    var s = React.useCallback((e) => {
        d(null);
      }),
      o = React.useCallback((e) => {
        g?.current && g.current.click();
      }),
      f = React.useCallback((e) => {
        e.preventDefault(),
          e.stopPropagation(),
          (e.dataTransfer.dropEffect = 'copy'),
          a || r(!0);
      }),
      m = React.useCallback((e) => {
        e.preventDefault(),
          e.stopPropagation(),
          a && r(!1),
          -1 !== l ||
            n.currentVideo ||
            n.processing ||
            (e?.dataTransfer?.files &&
              e.dataTransfer.files &&
              ((e = e.dataTransfer.files), (g.current.files = e), h()));
      }),
      P = React.useCallback((e) => {
        a && r(!1);
      });
    const h = () => {
      if ((p?.current && clearTimeout(p.current), !t)) {
        if (!n._loggedIn || (n._loggedIn && !n?._loggedIn?.username))
          return d({ message: 'Please sign in to upload videos' }), !1;
        if ((i(!0), g?.current?.files && g.current.files[0])) {
          if (-1 === l && !n.currentVideo && !n.processing) {
            const o = g.current.files[0];
            var e = new FormData();
            let t, a, r;
            var s = o.name.match(/\.([a-zA-Z0-9]*)$/)[1],
              s =
                (e.append('extension', s),
                e.append('video', o),
                e.append('dborigin', n.dborigin),
                e.append('domainKey', n.domainKey),
                e.append('identifier', n._loggedIn.identifier),
                e.append('hash', n._loggedIn.hash),
                e.append('socket', n._loggedIn.identifier + '-' + n.dborigin),
                {
                  onUploadProgress: (e) => {
                    console.log('Progress', e),
                      !n?.processing && n?.setProcessing && n.setProcessing(!0),
                      (t = e.loaded / 1e6),
                      (a = o.size / 1e6),
                      (r = Math.floor((t / a) * 100)),
                      console.log(r, a, t),
                      c(r),
                      n.updateTrackFileProgress && n.updateTrackFileProgress(r),
                      99.9999 <= r &&
                        n?.setHandlingMeta &&
                        n.setHandlingMeta(!0),
                      (u.current.style.width = r + '%');
                  },
                  headers: { 'Content-Type': 'multipart/form-data' },
                  withCredentials: !0,
                  timeout: n?.MAX_UPLOAD_TIME ?? MAX_UPLOAD_TIME,
                });
            (p.current = setTimeout(() => {
              i(!1);
            }, n?.MAX_UPLOAD_TIME ?? MAX_UPLOAD_TIME)),
              axios
                .post(n.apiUrl + '/m/uploadvideo', e, s)
                .then(async (e) => {
                  e &&
                    200 == response.status &&
                    (n?.setProcessing && n.setProcessing(!0),
                    d(null),
                    e.data) &&
                    e.data.job &&
                    n?.setVideoDocumentProxy &&
                    n.setVideoDocumentProxy(e.data.job);
                })
                .catch((e, t) => {
                  u?.current && (u.current.style.width = 0),
                    c(-1),
                    i(!1),
                    n?.setProcessing && n.setProcessing(!1),
                    g?.current && (g.current.value = null),
                    n?.setProcessing && n.setProcessing(!1),
                    e.res && e.res.data && e.res.data.message
                      ? (this.setState({ pageError: e.res.data.message }),
                        'disauthenticated' == e.res.data.message && logout())
                      : d({
                          message: 'Something went wrong during video upload',
                        });
                });
          }
        } else i(!1), d({ message: 'Please choose a video to upload' });
      }
    };
    return (
      React.useEffect(() => {
        99.9999 <= l && n?.setHandlingMeta && n.setHandlingMeta(!0);
      }, [l]),
      React.createElement(
        'div',
        null,
        React.createElement(
          UploadVideoFile,
          _extends({}, n, {
            dropHandler: m,
            dropHandlerOver: f,
            dropHandlerEnd: P,
            draggingOver: a,
            fileInput: g,
            doUpload: h,
            beginUpload: o,
            pageError: e,
            handleClearError: s,
            loadingBar: u,
            processing: n.processing,
            currentVideo: n.currentVideo,
            fileProgress: l,
            fetchBusy: t,
          })
        )
      )
    );
  };
export default Module;
