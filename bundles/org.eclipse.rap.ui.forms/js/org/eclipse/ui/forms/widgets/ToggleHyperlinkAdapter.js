/*******************************************************************************
 * Copyright (c) 2012 EclipseSource and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    EclipseSource - initial API and implementation
 ******************************************************************************/

rwt.protocol.HandlerRegistry.add( "forms.widgets.ToggleHyperlink", {

  factory : function( properties ) {
    var result = new org.eclipse.ui.forms.widgets.ToggleHyperlink();
    result.setUserData( "isControl", true );
    rwt.protocol.HandlerUtil.setParent( result, properties.parent );
    return result;
  },

  destructor : rwt.protocol.HandlerUtil.getControlDestructor(),

  getDestroyableChildren : rwt.protocol.HandlerUtil.getDestroyableChildrenFinder(),

  properties : rwt.protocol.HandlerUtil.extendControlProperties( [
    "images",
    "expanded"
  ] ),

  propertyHandler : rwt.protocol.HandlerUtil.extendControlPropertyHandler( {
    "images" : function( widget, value ) {
      var collapseNormal = value[ 0 ] === null ? null : value[ 0 ][ 0 ];
      var collapseHover = value[ 1 ] === null ? null : value[ 1 ][ 0 ];
      var expandNormal = value[ 2 ] === null ? null : value[ 2 ][ 0 ];
      var expandHover = value[ 3 ] === null ? null : value[ 3 ][ 0 ];
      widget.setImages( collapseNormal, collapseHover, expandNormal, expandHover );
    }
  } ),

  listeners : rwt.protocol.HandlerUtil.extendControlListeners( [
    "DefaultSelection"
  ] ),

  listenerHandler : rwt.protocol.HandlerUtil.extendControlListenerHandler( {} ),

  methods : []

} );