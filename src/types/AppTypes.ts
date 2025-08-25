// App/global types and navigation param lists
export type AuthStackParamList = {
  Login: undefined;
  OTP: undefined;
  Passcode: undefined;
  Profile: undefined;
};

export type MainDrawerParamList = {
  NewAssignments: undefined;
  AwardedAssignments: undefined;
  PendingInvoices: undefined;
  PastInvoices: undefined;
  CancelledAssignments: undefined;
  Profile: undefined;
  MyCredentials: undefined;
  AssignmentToBid: undefined;
};

export type RootParamList = AuthStackParamList & MainDrawerParamList;

