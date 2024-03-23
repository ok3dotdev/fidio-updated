import { fetchPost } from "../../utility/fetch";
export const loadArticle = async (props, id, editorRef, titleRef, groupsRef, tagsRef, setUseGroups, setUseTags, setPublished, setApproved, approvedRef, setMeta, setInHtmlImages) => {
  try {
    if (!props.fetchBusy) {
      props.setFetchBusy(true);
      setTimeout(() => {
        props.setFetchBusy(false);
      }, 10000);
      if (id) {
        const body = {
          domainKey: props.domainKey,
          hash: props._loggedIn.hash,
          identifier: props._loggedIn.identifier,
          id: id
        };
        let res = await fetchPost(props.apiUrl + '/a/getarticle', null, null, body);
        if (!res) {
          props.setFetchBusy(false);
          return false;
        } else if (res.hasOwnProperty('status')) {
          props.setFetchBusy(false);
          if (res.status == "disauthenticated") {
            logout();
            return "disauthenticated";
          } else if (res.status == "failed") {
            return false;
          } else if (res.status == "success") {
            if (res?.data) {
              const data = res.data;
              if (data.contents && JSON.parse(data.contents)) {
                const delta = editorRef.current.clipboard.convert(JSON.parse(data.contents));
                editorRef.current.setContents(delta, 'silent');
              }
              if (data.title) {
                titleRef.current.value = data.title;
              }
              if (data.groups) {
                groupsRef.current.value = data.groups.join(' ');
                setUseGroups(data.groups);
              }
              if (data.tags) {
                tagsRef.current.value = data.tags.join(' ');
                setUseTags(data.tags);
              }
              if (Object.prototype.hasOwnProperty.call(data, 'approved')) {
                setApproved(data.approved);
                if (approvedRef?.current) {
                  approvedRef.current.checked = data.approved;
                }
              }
              if (data.meta) {
                setMeta(data.meta);
              }
              if (data.images) {
                setInHtmlImages(data.images);
              }
              setPublished(res.data);
            }
            return res;
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
    props.setFetchBusy(false);
  }
};
export const publishArticle = async (props, published, titleRef, useGroups, useTags, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, meta, setDidPublishThisSession, setPublished, loadDefault, useDefaultText, approved, setApproved, approvedRef, inHtmlImages) => {
  try {
    if (!props.fetchBusy) {
      props.setFetchBusy(true);
      setTimeout(() => {
        props.setFetchBusy(false);
      }, 10000);
      const safeContents = editorRef.current.root.innerHTML;
      if (safeContents) {
        const body = {
          domainKey: props.domainKey,
          hash: props._loggedIn.hash,
          identifier: props._loggedIn.identifier,
          published: published,
          title: titleRef.current.value,
          contents: safeContents,
          groups: useGroups,
          tags: useTags,
          images: inHtmlImages,
          meta: meta,
          approved: approved
        };
        let res = await fetchPost(props.apiUrl + '/a/publisharticle', null, null, body);
        if (!res) {
          props.setFetchBusy(false);
          return false;
        } else if (res.hasOwnProperty('status')) {
          props.setFetchBusy(false);
          if (res.status == "disauthenticated") {
            logout();
            return "disauthenticated";
          } else if (res.status == "failed") {
            return false;
          } else if (res.status == "success") {
            console.log(res);
            if (res?.published) {
              setUseTags(null);
              setUseGroups(null);
              tagsRef?.current ? tagsRef.current.value = '' : null;
              groupsRef?.current ? groupsRef.current.value = '' : null;
              if (editorRef?.current) {
                editorRef.current.setContents([{
                  insert: useDefaultText
                }]);
              }
              titleRef?.current ? titleRef.current.value = '' : null;
              localStorage.setItem('cached_post_admin', null);
              if (approvedRef?.current) {
                approvedRef.current.checked = true;
              }
              if (setApproved) {
                setApproved(true);
              }
              setDidPublishThisSession(true);
              setPublished(res.published);
              loadDefault();
            }
            return res;
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
    props.setFetchBusy(false);
  }
};
export const deleteArticle = async (props, published, titleRef, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, setPublished, loadDefault, useDefaultText) => {
  try {
    if (!props.fetchBusy) {
      props.setFetchBusy(true);
      setTimeout(() => {
        props.setFetchBusy(false);
      }, 10000);
      if (published?.id) {
        const body = {
          domainKey: props.domainKey,
          hash: props._loggedIn.hash,
          identifier: props._loggedIn.identifier,
          id: published.id
        };
        let res = await fetchPost(props.apiUrl + '/a/deletearticle', null, null, body);
        if (!res) {
          props.setFetchBusy(false);
          return false;
        } else if (res.hasOwnProperty('status')) {
          props.setFetchBusy(false);
          if (res.status == "disauthenticated") {
            logout();
            return "disauthenticated";
          } else if (res.status == "failed") {
            return false;
          } else if (res.status == "success") {
            setUseTags(null);
            setUseGroups(null);
            tagsRef?.current ? tagsRef.current.value = '' : null;
            groupsRef?.current ? groupsRef.current.value = '' : null;
            if (editorRef?.current) {
              editorRef.current.setContents([{
                insert: useDefaultText
              }]);
            }
            titleRef?.current ? titleRef.current.value = '' : null;
            localStorage.setItem('cached_post_admin', null);
            setPublished(false);
            loadDefault();
            return res;
          }
        }
      }
    }
  } catch (err) {
    props.setFetchBusy(false);
  }
};