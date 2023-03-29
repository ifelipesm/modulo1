import  OneSignal  from 'react-native-onesignal';


export function tagUserCreate(){
  OneSignal.sendTags({
    'user_name': 'Felipe',
    'user_email': 'dev@igniteshoes.com'
  })
}

export function tagCartUpdate(itemsCount: string){
  OneSignal.sendTag('cart_items_count',itemsCount);
}