export type Gender = "Male" | "Female" | "Other";

export type OnlineStatus = "idle" | "offline" | "online";

export interface Author {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  avatar: string;
  onlineStatus: OnlineStatus;
}
