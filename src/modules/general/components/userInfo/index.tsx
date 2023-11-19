import { getNameInitials } from 'modules/general/store/utils';

type RepoProps = {
  name?: string; // Make the name property optional
};

export const stringAvatar = ({ name }: RepoProps) => ({
  children: name ? `${getNameInitials({ name })}` : '', // Check if name is provided
});
