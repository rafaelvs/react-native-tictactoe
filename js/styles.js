import React, {
  Component
} from 'react';
import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      backgroundColor: '#008b8b'
    },
    board: {
      flex: 20,
      justifyContent: 'space-between',
      backgroundColor: 'blue'
    },
    boardRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: 'green'
    },
    boardColumn: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderWidth: 1,
      backgroundColor: '#008b8b'
    },
    mark: {
      fontSize: 100,
      fontWeight: 'bold'
    },
    header: {
      padding: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      borderWidth: 1,
      backgroundColor: '#ffd700'
    },
    footer: {
      padding: 10,
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    restartButtonContainer: {
      backgroundColor: '#f0e68c',
      width: 100,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
      borderRadius: 10
    },
    restartButtonText: {
      fontSize: 20,
      fontFamily: 'serif',
      fontWeight: 'bold',
    }
  });