/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import { HospitalStackParamsList, SharedStackParamList } from '@/Containers'
import { showToast } from '@/Shared/utils'
import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native'

interface baseStackParamList {
  Startup: undefined
  Home: undefined,
  SharedNav : undefined,
  AuthNav : undefined,
  MainNav : undefined,
  HospitalNav : undefined,
  NotificatioinNav : undefined,
} 

type ChildStackParamList = SharedStackParamList & HospitalStackParamsList

export type RootStackParamList = baseStackParamList & ChildStackParamList


export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function navigateToSibling(name: keyof RootStackParamList, siblingName : string, params ?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, {screen: siblingName, params : params || {}})
  }
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    )
  }
}

export function navigateAndSimpleReset(name: string, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    )
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}