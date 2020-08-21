import AsyncStorage from '@react-native-community/async-storage';

const ZIPCODE = '@key:zipcode';

export async function getZip() {
    let code = await AsyncStorage.getItem(ZIPCODE)
    
    return JSON.parse(code)
}

export async function setZip(zip) {
    AsyncStorage.setItem(ZIPCODE, JSON.stringify(zip))
}