import * as LocalAuthentication from 'expo-local-authentication';

/**
 * A simple authenticate service to authenticate user using device biometric. Utilize Expo LocalAuthentication library
 *
 * @see {@link https://docs.expo.dev/versions/latest/sdk/local-authentication/#installation | Expo LocalAuthentication}
 */
export const authenticateUser = async () => {
  try {
    const hasHardware = await LocalAuthentication.hasHardwareAsync(); // Check if fingerprint scanner of face ID is available on the device first

    if (!hasHardware) {
      throw new Error('Device does not support biometric authentication!');
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Please login to view transaction amount',
    });

    return result.success;
  } catch (error) {
    console.error('Authentication error: ', error);
    return false;
  }
};
