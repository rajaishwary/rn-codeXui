import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Share from 'react-native-share';

const IMAGES = [
  'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
  'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
  'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
];

class WAShareWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.imagesBase64Arr = [];
  }

  setImages = async (base64Img, arrLength = 0) => {
    const { successCb } = this.props;
    this.imagesBase64Arr = [...this.imagesBase64Arr, base64Img];
    if (this.imagesBase64Arr.length === arrLength) {
      successCb && successCb();
      const shareOptions = {
        title: 'Share via',
        urls: this.imagesBase64Arr,
        social: Share.Social.WHATSAPP,
        failOnCancel: false,
      };
      await Share.shareSingle(shareOptions);
      this.imagesBase64Arr = [];
      return;
    }
    return;
  };

  multipleShareOnWhatsapp = async category_url => {
    try {
      const { initCb } = this.props;
      initCb && initCb();

      const imgPromiseArr = IMAGES.reduce((acc, imgUrl) => {
        acc.push(fetch(imgUrl));
        return acc;
      }, []);
      await Promise.all(imgPromiseArr)
        .then(async allRes => {
          for await (let imgs of allRes) {
            (async () => {
              const b = await imgs.blob();
              const reader = new FileReader();
              reader.readAsDataURL(b);
              reader.onloadend = async function() {
                const base64data = reader.result;
                const updatedBase64Png = base64data.replace('data:application/octet-stream;', 'data:image/png;');
                this.setImages(updatedBase64Png, imgPromiseArr.length);
              }.bind(this);
            })();
          }
        })
        .catch(e => {
          console.log(e);
          const { errorCb } = this.props;
          errorCb && errorCb();
        });
    } catch (e) {
      console.log(e);
      const { errorCb } = this.props;
      errorCb && errorCb();
    }
  };

  render() {
    const { url } = this.props;
    return (
      <TouchableOpacity onPress={() => this.multipleShareOnWhatsapp(url)}>
        <View>{this.props.children}</View>
      </TouchableOpacity>
    );
  }
}

export default WAShareWrapper;
