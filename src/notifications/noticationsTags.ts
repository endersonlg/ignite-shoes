import OneSignal from "react-native-onesignal"


export function tagUserInfoCreate(){
  OneSignal.sendTags({
    'user_name':'Enderson',
    'user_email':'enderson@gmail.com'
  })
}


export function tagCardUpdate(ItemsCount:string){
  OneSignal.sendTag('card_item_count',ItemsCount)
}