/*******************************************************************************
 *  Copyright: 2004, 2010 1&1 Internet AG, Germany, http://www.1und1.de,
 *                        and EclipseSource
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this
 * distribution, and is available at http://www.eclipse.org/legal/epl-v10.html
 *
 *  Contributors:
 *    1&1 Internet AG and others - original API and implementation
 *    EclipseSource - adaptation for the Eclipse Rich Ajax Platform
 ******************************************************************************/

/** This singleton is used to manager multiple instances of popups and their state. */
qx.Class.define("qx.ui.popup.PopupManager",
{
  type : "singleton",
  extend : qx.util.manager.Object,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function() {
    this.base(arguments);
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /*
    ---------------------------------------------------------------------------
      METHODS
    ---------------------------------------------------------------------------
    */

    /**
     * Updates all registered popups
     *
     * @type member
     * @param vTarget {rwt.widgets.base.Popup | rwt.widgets.base.ToolTip} current widget
     * @return {void}
     */
    update : function(vTarget)
    {
      // be sure that target is correctly set (needed for contains() later)
      if (!(vTarget instanceof rwt.widgets.base.Widget)) {
        vTarget = null;
      }

      var vPopup, vHashCode;
      var vAll = this.getAll();

      for (vHashCode in vAll)
      {
        vPopup = vAll[vHashCode];

        if (!vPopup.getAutoHide() || vTarget == vPopup || vPopup.contains(vTarget)) {
          continue;
        }

        if (qx.Class.isDefined("rwt.widgets.base.ToolTip") && vTarget instanceof rwt.widgets.base.ToolTip && !(vPopup instanceof rwt.widgets.base.ToolTip)) {
          continue;
        }

        vPopup.hide();
      }
    }
  }
});
