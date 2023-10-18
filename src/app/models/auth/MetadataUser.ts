import { AuthenticatedUser } from "./AuthenticatedUser";

export type MetadataUser = {
    islogin: boolean;
    role: string;
    data?: AuthenticatedUser;
}