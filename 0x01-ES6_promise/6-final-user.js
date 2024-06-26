import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName).then(
      (value) => ({ status: 'fulfilled', value }),
      (error) => ({ status: 'rejected', value: error })
    ),
      uploadPhoto(fileName).then(
      (value) => ({ status: 'fulfilled', value }),
      (error) => ({ status: 'rejected', value: error })
    )
    ];

  return Promise.all(promises);
}

