/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

const styles = StyleSheet.create({
  pendingView: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

const PendingView = () => (
  <View style={styles.pendingView}>
    <Text>Waiting</Text>
  </View>
);

const Camera = ({onChangeText, isFocused}) => {
  if (isFocused) {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          captureAudio={false}
          onTextRecognized={({textBlocks}) => {
            let labels = [];
            for (const k in textBlocks) {
              let a = false;
              let b = false;
              let thisString = '';
              for (const c in textBlocks[k].value) {
                if (textBlocks[k].value[c] === ':') {
                  if (!a && !b) {
                    a = true;
                  } else if (a && !b) {
                    b = true;
                  } else if (a && b) {
                    a = false;
                  } else if (!a && b) {
                    b = false;
                    labels.push(thisString);
                    thisString = '';
                  }
                } else {
                  if (!a && !b) {
                  } else if (a && !b) {
                    a = false;
                  } else if (a && b) {
                    thisString += textBlocks[k].value[c];
                  } else if (!a && b) {
                    a = true;
                    thisString += ':' + textBlocks[k].value[c];
                  }
                }
              }
            }
            onChangeText(labels[0]);
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') {
              return <PendingView />;
            }
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              />
            );
          }}
        </RNCamera>
      </View>
    );
  } else {
    return null;
  }
};

export default Camera;
