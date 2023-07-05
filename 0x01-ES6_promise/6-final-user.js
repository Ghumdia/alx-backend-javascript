import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  const promises = [];

  promises.push(
    signUpUser(firstName, lastName)
      .then((user) => ({ status: 'fulfilled', value: user }))
      .catch((error) => ({ status: 'rejected', value: error })),
  );

  promises.push(
    uploadPhoto(fileName)
      .then((result) => ({ status: 'fulfilled', value: result }))
      .catch((error) => ({ status: 'rejected', value: error })),
  );

  return Promise.all(promises);
};

export default handleProfileSignup;
