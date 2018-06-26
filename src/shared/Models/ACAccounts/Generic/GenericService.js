import CoreACService from '../CoreACService'

class GenericService extends CoreACService {
  /* **************************************************************************/
  // Class : Types
  /* **************************************************************************/

  static get type () { return CoreACService.SERVICE_TYPES.GENERIC }

  /* **************************************************************************/
  // Properties: Support
  /* **************************************************************************/

  get supportsUnreadActivity () { return true }
  get supportsUnreadCount () { return this.supportsWBGAPI }
  get supportsTrayMessages () { return this.supportsWBGAPI }
  get supportsSyncedDiffNotifications () { return false }
  get supportsNativeNotifications () { return false }
  get supportsGuestNotifications () { return true }
  get supportsSyncWhenSleeping () { return false }
  get supportsWBGAPI () { return this._value_('supportsWBGAPI', false) }
  get supportedAuthNamespace () { return undefined }

  /* **************************************************************************/
  // Properties: Humanized
  /* **************************************************************************/

  get humanizedType () { return 'Weblink' }
  get humanizedLogos () {
    return [
      'generic/logo_32px.png',
      'generic/logo_48px.png',
      'generic/logo_64px.png',
      'generic/logo_96px.png',
      'generic/logo_128px.png'
    ]
  }
  get humanizedUnreadItemType () { return 'notification' }

  /* **************************************************************************/
  // Properties: Display
  /* **************************************************************************/

  get hasNavigationToolbar () { return this._value_('hasNavigationToolbar', false) }
  get displayName () { return this._value_('displayName', super.displayName) }
  get usePageThemeAsColor () { return this._value_('usePageThemeAsColor', false) }
  get pageThemeColor () { return this._value_('pageThemeColor', undefined) }

  /**
  * @overwrite
  */
  getColorWithData (serviceData) {
    if (this.usePageThemeAsColor && serviceData.documentTheme) {
      return serviceData.documentTheme
    } else {
      return this.color
    }
  }

  /**
   * @overwrite
   */
  getDisplayNameWithData (serviceData) {
    if (this.usePageTitleAsDisplayName && serviceData.documentTitle) {
      return serviceData.documentTitle
    } else {
      return this.displayName
    }
  }

  /* **************************************************************************/
  // Properties: Behaviour
  /* **************************************************************************/

  get url () { return this._value_('url', 'about:blank') }
  get reloadBehaviour () { return CoreACService.RELOAD_BEHAVIOURS.RELOAD_URL }
}

export default GenericService