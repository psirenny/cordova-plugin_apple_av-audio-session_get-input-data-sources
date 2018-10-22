// @flow

type AVAudioSessionLocationLower = 'Lower';
type AVAudioSessionLocationUpper = 'Upper';

type AppleAVAudioSessionLocation = (
  | AVAudioSessionLocationLower
  | AVAudioSessionLocationUpper
);

type AppleAVAudioSessionOrientationBack = 'Back';
type AppleAVAudioSessionOrientationBottom = 'Bottom';
type AppleAVAudioSessionOrientationFront = 'Front';
type AppleAVAudioSessionOrientationLeft = 'Left';
type AppleAVAudioSessionOrientationRight = 'Right';
type AppleAVAudioSessionOrientationTop = 'Top';

type AppleAVAudioSessionOrientation = (
  | AppleAVAudioSessionOrientationBack
  | AppleAVAudioSessionOrientationBottom
  | AppleAVAudioSessionOrientationFront
  | AppleAVAudioSessionOrientationLeft
  | AppleAVAudioSessionOrientationRight
  | AppleAVAudioSessionOrientationTop
);

type AppleAVAudioSessionDataSourceDescription = {|
  dataSourceID: number,
  dataSourceName: string,
  location?: AppleAVAudioSessionLocation,
  orientation?: AppleAVAudioSessionOrientation,
|};

export default (): Promise<?AppleAVAudioSessionDataSourceDescription> => (
  new Promise((resolve, reject) => global.cordova.exec(
    resolve,
    reject,
    'AppleAVAudioSessionGetInputDataSources',
    'exec',
  ))
);
