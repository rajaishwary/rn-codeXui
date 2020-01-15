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
    this.allImgsOfCategory = [];
  }

  setImages = async (base64, arrLength = 0) => {
    const { successCallback } = this.props;
    this.allImgsOfCategory = [...this.allImgsOfCategory, base64];
    if (this.allImgsOfCategory.length === arrLength) {
      successCallback && successCallback();
      const shareOptions = {
        title: 'Share via',
        urls: this.allImgsOfCategory,
        social: Share.Social.WHATSAPP,
        failOnCancel: false,
      };
      await Share.shareSingle(shareOptions);
      this.allImgsOfCategory = [];
      return;
    }
    return;
  };

  multipleShareOnWhatsapp = async category_url => {
    try {
      const { initCallback } = this.props;
      initCallback && initCallback();

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
                const convert = base64data.replace('data:application/octet-stream;', 'data:image/png;');
                this.setImages(convert, promiseArray.length);
              }.bind(this);
            })();
          }
        })
        .catch(e => {
          console.log(e);
          const { errorCallBack } = this.props;
          errorCallBack && errorCallBack();
        });
    } catch (e) {
      console.log(e);
      const { errorCallBack } = this.props;
      errorCallBack && errorCallBack();
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
