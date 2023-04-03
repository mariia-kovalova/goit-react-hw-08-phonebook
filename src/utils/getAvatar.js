const NUMBER_OF_AVATARS = 5;
let count = 0;

export const getAvatar = (listLength, avatarsList) => {
  const number = count;
  count += 1;
  if (count >= NUMBER_OF_AVATARS) count = 0;
  return avatarsList[number];
};
