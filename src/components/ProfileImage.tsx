import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
const ProfileImage = () => {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
          }}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileImage: { width: 150, height: 150, borderRadius: 8 },
});

export default ProfileImage;
