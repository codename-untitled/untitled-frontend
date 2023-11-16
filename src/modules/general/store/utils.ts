/* eslint-disable no-plusplus */
type RepoProps = {
  name: string;
};
export const getNameInitials = ({ name }: RepoProps) => {
  const parts = name.split(' ');
  let initials = '';
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== '') {
      initials += parts[i][0];
    }
  }
  return initials;
};
