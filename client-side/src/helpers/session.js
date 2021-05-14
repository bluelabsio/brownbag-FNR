
export const logout = () => (
fetch("/auth/logout")
);
export const checkLoggedIn = () => {
    return true;
};