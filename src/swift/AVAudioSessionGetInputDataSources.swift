import AVFoundation

@objc(AppleAVAudioSessionGetRecordPermission)
class AppleAVAudioSessionGetRecordPermission: CDVPlugin {
  @objc(exec:) func exec(_ command: CDVInvokedUrlCommand) {
    if let dataSources = AVAudioSession.sharedInstance().inputDataSources {
      let value = dataSources.map({ (dataSource: AVAudioSessionDataSourceDescription) in [
        "dataSourceID": dataSource.dataSourceID,
        "dataSourceName": dataSource.dataSourceName,
        "location": dataSource.location,
        "orientation": dataSource.orientation
      ]})

      let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: value)
      self.commandDelegate!.send(result, callbackId: command.callbackId)
    } else {
      let result = CDVPluginResult(status: CDVCommandStatus_OK)
      self.commandDelegate!.send(result, callbackId: command.callbackId)
    }
  }
}
