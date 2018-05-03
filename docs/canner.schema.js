/** @jsx c */

import c from '@canner/canner-script';

export default <root>
  <object keyName="home" title="All Components">
    <object keyName="header" >
      <string keyName="title" title="title"/>
      <string keyName="subTitle" title="subtitle"/>
    </object>
    <number keyName="count" title="count" />
    <array keyName="navs" title="navs">
      <string keyName="text" />
    </array>
  </object>
</root>
