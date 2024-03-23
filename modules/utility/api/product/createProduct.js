import { fetchPost } from '/modules/utility/fetch';
import { defaultStyle, defaultProduct } from '/modules/ecommerce/product/defaults';
export default async function handler(body) {
  console.log('Create Product Body', body);
  if (body?.apiUrl && body?.pipelineDbItem) {
    const formData = new FormData();
    const product = body.pipelineDbItem ?? defaultProduct();
    const imgNames = [];
    Object.entries(body.pipelineObject).map(m => {
      switch (m[0]) {
        case 'name':
          product.name = m[1];
          break;
        case 'description':
          product.detailmeta.description = m[1];
          break;
        case 'eventDate':
          if (!product?.detailmeta) {
            product.detailmeta = defaultProduct().detailmeta;
          }
          if (!product?.detailmeta.eventDateDef) {
            product.detailmeta.eventDateDef = {
              dates: [],
              input: '',
              tags: []
            };
          }
          product.detailmeta.eventDateDef.dates = [m[1]];
          product.detailmeta.eventDateDef.input = [m[1].toString()];
          if (!product?.detailmeta.livestreamDef) {
            product.detailmeta.livestreamDef = {
              dates: [],
              input: '',
              tags: []
            };
          }
          product.detailmeta.livestreamDef.dates = [m[1]];
          product.detailmeta.livestreamDef.input = [m[1].toString()];
          break;
        case 'price':
          if (!product?.styles && product?.styles.length == 0) {
            product.styles = [defaultStyle()];
          }
          product.styles[0].price = m[1];
          break;
        case 'quantity':
          if (!product?.styles && product?.styles.length == 0) {
            product.styles = [defaultStyle()];
          }
          product.styles[0].quantity = m[1];
          break;
        case 'lineup':
          if (product?.detailmeta?.lineup && Array.isArray(m[1])) {
            m[1].map(n => {
              if (n.image && n.name && ['lineup'].indexOf(n.modif) > -1 && n.id) {
                formData.append('image', n.image);
                imgNames.push({
                  name: n.name,
                  modif: n.modif,
                  id: n.id,
                  title: n.title,
                  time: n.time,
                  description: n.description
                });
              }
            });
          }
          break;
        case 'images':
          if (Array.isArray(m[1])) {
            m[1].map(n => {
              if (n.image && n.name && ['leadImg', 'featureImg', 'productImg'].indexOf(n.modif) > -1) {
                formData.append('image', n.image);
                imgNames.push({
                  name: n.name,
                  modif: n.modif,
                  id: n.id
                });
              }
            });
          }
          break;
        default:
          product.meta[m[0]] = m[1];
          break;
      }
    });
    for (let i = 0; i < body.imgFor.length; i++) {
      const values = body.imgCache.getAll('image');
      if (values) {
        const f = values.find(m => m.name === body.imgFor[i].name);
        if (f) {
          formData.append('image', f); // Necessary filter through image cache user has shared. Do not send all images user has uploaded to server
          imgNames.push({
            name: f.name,
            modif: body.imgFor[i].modif,
            id: body.imgFor[i]?.id ?? null
          });
        }
      }
    }
    formData.append('imgNames', JSON.stringify(imgNames));
    formData.append('hash', body._loggedIn.hash);
    formData.append('identifier', body._loggedIn.identifier);
    formData.append('product', JSON.stringify(product));
    formData.append('shop', body?.shop?.id ?? null);
    formData.append('status', 'publish');
    formData.append('existing', body.existing);
    const res = await fetchPost(body.apiUrl + '/m/publishproduct', null, null, formData, {
      formData: true
    });
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        return res;
      }
    }
    return false;
  } else {
    return false;
  }
}