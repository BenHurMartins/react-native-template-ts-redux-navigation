import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  NewRecipe: undefined;
  Detail: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
