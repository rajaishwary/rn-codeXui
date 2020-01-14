import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Share from 'react-native-share';
​
class WAShareWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.allImgsOfCategory = [];
  }
​
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
​
  multipleShareOnWhatsapp = async category_url => {
    try {
      const { initCallback } = this.props;
      initCallback && initCallback();
      const urlKey = category_url;
      const productList  = {};
      
      const currentListOfProducts = productList[urlKey] || [];
      const promiseArray = currentListOfProducts.slice(0, 10).reduce((acc, cur) => {
        let imgUrl = cur.images && cur.images[0].url;
        acc.push(fetch(imgUrl));
        return acc;
      }, []);
      await Promise.all(promiseArray)
        .then(async allRes => {
          for await (let imgs of allRes) {
            (async () => {
              const b = await imgs.blob();
              const reader = new FileReader();
              reader.readAsDataURL(b);
              reader.onloadend = async function() {
                const base64data = reader.result;
                const convert = base64data.replace(
                  'data:application/octet-stream;',
                  'data:image/png;'
                );
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
​
export default WAShareWrapper;