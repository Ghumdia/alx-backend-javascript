import signUpUser from "./4-user-promise";
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  return Promise.all([signUpUser(firstname, lastname), uploadPhoto(filename)])
    .then((res) => {
      const [value1, value2] = res;
      const value1stat = value1.status === 'fulfilled' ? 'success' : 'failure';
      const value2stat = value2.status === 'fulfilled' ? 'success' : 'failure';
      const result = [
        { status: value1stat, value: value1.value },
        { status: value2stat, value: value2.value }
      ];
      return result;
    });
}
