import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditProfileScreen = ({ profileData, setProfileData, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chỉnh sửa hồ sơ</Text>
      <Text style={styles.label}>Tên đầy đủ:</Text>
      <TextInput
        style={styles.input}
        value={profileData.fullName}
        onChangeText={(text) => setProfileData({ ...profileData, fullName: text })}
      />
      <Text style={styles.label}>Biệt danh:</Text>
      <TextInput
        style={styles.input}
        value={profileData.nickname}
        onChangeText={(text) => setProfileData({ ...profileData, nickname: text })}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={profileData.email}
        onChangeText={(text) => setProfileData({ ...profileData, email: text })}
      />
      <Text style={styles.label}>Số điện thoại:</Text>
      <TextInput
        style={styles.input}
        value={profileData.mobileNumber}
        onChangeText={(text) => setProfileData({ ...profileData, mobileNumber: text })}
      />
      <Button title="Lưu thay đổi" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default EditProfileScreen;
