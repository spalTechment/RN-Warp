// Navigation param types generated from config/project-config-sample.json
// Keep these types in sync with the configured screens and flows

export type RootStackParamList = {
  Splash: undefined;
  AuthStack: undefined;
  MainBottomTabs: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  HomeStack: undefined;
  PetsStack: undefined;
  OrdersStack: undefined;
  ProfileStack: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  PetDetails: { petId: number } | undefined;
  AddPet: undefined;
  EditPet: { petId: number } | undefined;
  OrderDetails: { orderId: number } | undefined;
  Checkout: { orderId?: number } | undefined;
};

export type PetsStackParamList = {
  Pets: undefined;
  PetDetails: { petId: number } | undefined;
  AddPet: undefined;
  EditPet: { petId: number } | undefined;
  Search: undefined;
  Favorites: undefined;
};

export type OrdersStackParamList = {
  Orders: undefined;
  OrderDetails: { orderId: number } | undefined;
  Checkout: { orderId?: number } | undefined;
  OrderPet: { petId?: number } | undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  Settings: undefined;
};

