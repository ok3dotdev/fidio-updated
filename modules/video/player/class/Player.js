// /** Video player VideoPlayer.js
//  @version 0.1
//  @author lovgrandma
// File is used to handle high level lifecycle of video player */

// import dynamic from 'next/dynamic';
// import encryptionSchemePolyfills from 'eme-encryption-scheme-polyfill'
// import muxjs from "mux.js"

// // mainShakaImport "shaka-player/dist/shaka-player.ui.js";
// // testShakaImport "../../../../../../../shaka/shaka-player/dist/shaka-player.ui.js";
// const mainShakaImport = 'shaka-player/dist/shaka-player.ui.js'
// const testShakaImport = '../../../../../../../shaka/shaka-player/dist/shaka-player.ui.js'

// export default class VideoPlayer {
//     constructor() {
//         if (!VideoPlayer.intance) {
//             VideoPlayer.instance = this
//         }
//         this.encryptionSchemePolyfills
//         this.shaka
//         this.player
//         this.cdn = ""
//         this.init = false
//         this.videoLoadedSuccessfully = false // Tracks success of load
//         this.supportedPlaybackType = null
//         this.iosRevertFunctionality = [ 'iphone', 'ipad', 'ipod', 'applewatch', 'iphone simulator', 'ipod simulator', 'ipad simulator' ]
//         return VideoPlayer.instance
//     }

//     async importShakaPlayer() {
//         this.shaka = (await import('shaka-player/dist/shaka-player.ui.js')).default;
//         return this.shaka
//     }

//     async initPlayer(videoComponent, conf) {
//         try {
//             if (!window.muxjs) {
//                 window.muxjs = muxjs
//             }
//             let promise = new Promise(async (resolve, reject) => {
//                 try {
//                     let shakaContainer = await this.installPolyfills()
//                     this.init = true;
//                     if (shakaContainer.Player) {
//                         let player = await new shakaContainer.Player(videoComponent)
//                         if (conf) {
//                             player.configure(conf)
//                         }
//                         this.player = player
//                         await this.checkPlaybackSupportType()
//                         return resolve({
//                             shaka: this.shaka,
//                             player: this.player
//                         })
//                     }
//                     return ({})
//                 } catch (err) {
//                     reject(err)
//                 }
//             })
//             return await promise;
//         } catch (err) {
//             console.log(err);
//             return false;
//         }
//     }

//     checkAltDevice() {
//         try {
//             const ios = navigator && navigator.platform && navigator.platform.toLowerCase() ? navigator.platform.toLowerCase() : null
//             if (ios && this.iosRevertFunctionality.indexOf(ios) > -1) {
//                 return {
//                     alternateLoadFunctionality: 'src',
//                     ios: ios,
//                     format: 'hls'
//                 }
//             }
//             return null
//         } catch (err) {
//             return null
//         }
//     }

//     /**
//      * 
//      * @param {*} media 
//      * @param {*} cdn 
//      * @param {*} postfix 
//      * @param {Boolean} forceLoad Forces load even if video has been loaded already
//      * @param {Boolean} dontForceIfSameMedia Flag to avoid reloading if media already loaded to player
//      * @returns 
//      */
//     async loadMedia(media, cdn, postfix = "", forceLoad = false, dontForceIfSameMedia = false) {
//         try {
//             console.log("Load Media", media, cdn, this.player, this.cdn, forceLoad, this.videoLoadedSuccessfully)
//             if (!this.videoLoadedSuccessfully || forceLoad) {
//                 if (forceLoad && dontForceIfSameMedia && this.videoLoadedSuccessfully == cdn + postfix + media.hls) {
//                     return // Don't force if same media
//                 }
//                 const s = await this.checkPlaybackSupportType()
//                 if (s == "mpd") {
//                     let l = await this.player.load(cdn + postfix + media.mpd)
//                     if (l !== false) {
//                         this.videoLoadedSuccessfully = cdn + postfix + media.hls
//                     }
//                     return l
//                 } else {
//                     let l = await this.player.load(cdn + postfix + media.hls)
//                     if (l !== false) {
//                         this.videoLoadedSuccessfully = cdn + postfix + media.hls
//                     }
//                     return l
//                 }
//             }
//             return
//         } catch (err) {
//             return false
//         }
//     }

//     /**
//      * Determines whether to use Hls or Mpd
//      * @param none
//      * @return {String} "-hls.m3u8" or "-mpd.mpd"
//      */
//     async checkPlaybackSupportType() {
//         try {
//             const device = this.checkAltDevice()
//             if (device && device.format) {
//                 this.supportedPlaybackType = device.format
//                 return device.format
//             }
//             if (this.supportedPlaybackType) {
//                 return this.supportedPlaybackType
//             }
//             const support = await shaka.Player.probeSupport()
//             let type = support.manifest.mpd ? "mpd" : "hls"
//             this.supportedPlaybackType = type
//             return type
//         } catch (err) {
//             return "mpd";
//         }
//     }

//     async loadLivestreamDirect(url) {
//         let l = await this.player.load(url)
//         if (l !== false) {
//             this.videoLoadedSuccessfully = url
//         }
//     }

//     async installPolyfills() {
//         try {
//             await this.importShakaPlayer()
//             encryptionSchemePolyfills.install()
//             this.shaka.polyfill.installAll()
//             return this.shaka
//         } catch (err) {
//             return false;
//         }
//     }

//     set init(init) {
//         if (this._init != init) {
//             this._init = init
//         }
//     }

//     set supportedPlaybackType(supportedPlaybackType) {
//         if (this._supportedPlaybackType != supportedPlaybackType) {
//             this._supportedPlaybackType = supportedPlaybackType
//         }
//     }

//     get supportedPlaybackType() {
//         return this._supportedPlaybackType
//     }

//     set cdn(cdn) {
//         if (this._cdn != cdn) {
//             this._cdn = cdn
//         }
//     }

//     get cdn() {
//         return this._cdn;
//     }

//     get videoLoadedSuccessfully() {
//         return this._videoLoadedSuccessfully
//     }

//     set videoLoadedSuccessfully(videoLoadedSuccessfully) {
//         if (this._videoLoadedSuccessfully != videoLoadedSuccessfully) {
//             this._videoLoadedSuccessfully = videoLoadedSuccessfully
//         }
//     }

//     get init() {
//         return this._init;
//     }

//     set player(player) {
//         if (this._player != player) {
//             this._player = player
//         }
//     }

//     get player() {
//         return this._player
//     }
// }
"use strict";