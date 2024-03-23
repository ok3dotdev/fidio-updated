export const fireGlobalEvent = (e, emitter) => {
  console.log(e);
  if (e && emitter) {
    const action = e?.currentTarget?.getAttribute('action') ?? e.event ?? null;
    if (action) {
      if (action === 'buy') {
        const item = e?.currentTarget?.getAttribute('item');
        const style = e?.currentTarget?.getAttribute('selectedstyle');
        const option = e?.currentTarget?.getAttribute('currentoption');
        emitter.dispatch('global_event', {
          action: action,
          e: e,
          item: item,
          style: style,
          option: option
        });
      } else if (action === 'add_to_cart') {
        const item = e?.currentTarget?.getAttribute('item');
        const style = e?.currentTarget?.getAttribute('selectedstyle');
        const option = e?.currentTarget?.getAttribute('currentoption');
        emitter.dispatch('global_event', {
          action: action,
          e: e,
          item: item,
          style: style,
          option: option
        });
      } else if (action === 'add_to_cart_subscribe') {
        const item = e?.currentTarget?.getAttribute('item');
        const style = e?.currentTarget?.getAttribute('selectedstyle');
        const option = e?.currentTarget?.getAttribute('currentoption');
        emitter.dispatch('global_event', {
          action: action,
          e: e,
          item: item,
          style: style,
          option: option
        });
      } else {
        emitter.dispatch('global_event', {
          custom: true,
          action: action,
          e: e
        });
      }
    }
  }
};
export const selectThisText = e => {
  if (e?.currentTarget?.getAttribute) {
    const select = e.currentTarget.getAttribute('selectValue');
    if (select && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(select);
      if (window?.getSelection) {
        window.getSelection().selectAllChildren(e.currentTarget);
      }
    }
  }
};