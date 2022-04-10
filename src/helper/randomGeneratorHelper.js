export const randomChar = () => {
  const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  return chars.charAt(Math.floor(Math.random() * chars.length)); //1-52
};
