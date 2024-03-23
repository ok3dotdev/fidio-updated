import { defaultLineup } from "../product/defaults";
const doSetOptionsMetaData = (e, detailMeta, editing, setEditing, setEditingOptionsMeta, currentLineupEditing, setCurrentLineupEditing) => {
  if (e.currentTarget) {
    if (e.currentTarget.getAttribute('option')) {
      if (Object.prototype.hasOwnProperty.call(e.currentTarget, 'checked')) {
        const temp = {
          ...detailMeta
        };
        temp[e.currentTarget.getAttribute('option')] = e.currentTarget.checked;
        console.log(temp);
        if (setEditingOptionsMeta) {
          setEditingOptionsMeta(temp);
        }
      } else if (e.currentTarget.getAttribute('option') === 'livestreamDef' || e.currentTarget.getAttribute('option') === 'eventDateDef') {
        const temp = {
          ...detailMeta
        };
        if (e.currentTarget.getAttribute('option2')) {
          console.log(e.currentTarget);
          temp[e.currentTarget.getAttribute('option')][e.currentTarget.getAttribute('option2')] = e.currentTarget.value;
          const values = e.currentTarget.value.split(' ');
          const dates = [];
          const tags = [];
          values.map(v => {
            if (!isNaN(new Date(v))) {
              dates.push(new Date(v));
            } else {
              tags.push(v);
            }
          });
          temp[e.currentTarget.getAttribute('option')].dates = dates;
          temp[e.currentTarget.getAttribute('option')].tags = tags;
          console.log(temp);
          if (setEditingOptionsMeta) {
            setEditingOptionsMeta(temp);
          }
        }
      } else if (e.currentTarget.getAttribute('option') === 'lineupTemp') {
        const temp = {
          ...detailMeta
        };
        if (!temp.lineup) {
          temp.lineup = [];
        }
        let cur = currentLineupEditing;
        if (temp.lineup.length < 10) {
          console.log(cur);
          if (cur === null) {
            cur = temp.lineup.length; // Set valid index for currently editing
            setCurrentLineupEditing(cur);
          }
          const temp2 = {
            ...editing
          };
          if (!temp.lineup[cur]) {
            temp.lineup[cur] = defaultLineup();
            if (editing && !temp2.detailmeta.lineup) {
              temp2.detailmeta.lineup = [];
            }
          }
          console.log(temp2.detailmeta.lineup[cur], temp.lineup[cur]);
          const retainImage = temp.lineup[cur].image == '' && temp2.detailmeta.lineup[cur]?.image ? temp2.detailmeta.lineup[cur].image : temp.lineup[cur].image;
          temp2.detailmeta.lineup[cur] = temp.lineup[cur];
          temp2.detailmeta.lineup[cur].image = retainImage;
          if (setEditing) {
            setEditing(temp2);
          }
          temp.lineup[cur][e.currentTarget.getAttribute('option2')] = e.currentTarget.value;
          if (setEditingOptionsMeta) {
            setEditingOptionsMeta(temp);
          }
        }
      }
    }
  }
};
export { doSetOptionsMetaData };