import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.ImangeContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.Imange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ImangeContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Imange: {height: SPACING.space_36, width: SPACING.space_36},
});
export default ProfilePic;
