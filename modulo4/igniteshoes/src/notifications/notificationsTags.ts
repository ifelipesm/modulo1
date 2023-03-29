import  OneSignal  from 'react-native-onesignal';


export function tagUserCreate(){
  OneSignal.sendTags({
    'user_name': 'Felipe',
    'user_email': 'dev@igniteshoes.com'
  })
}