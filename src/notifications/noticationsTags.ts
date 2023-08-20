import OneSignal from "react-native-onesignal"


export function tagUserInfoCreate(){
  OneSignal.sendTags({
    'user_name':'Enderson',
    'user_email':'enderson@gmail.com'
  })
}
