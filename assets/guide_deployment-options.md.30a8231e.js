import{_ as e,o as t,c as n,S as o}from"./chunks/framework.8fda3224.js";const y=JSON.parse('{"title":"Deployment options","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deployment-options.md","filePath":"guide/deployment-options.md","lastUpdated":1692299928000}'),a={name:"guide/deployment-options.md"},s=o('<h1 id="deployment-options" tabindex="-1">Deployment options <a class="header-anchor" href="#deployment-options" aria-label="Permalink to &quot;Deployment options&quot;">​</a></h1><p>If the Inverter is close to your server/SBC running Home Assistant, you can use the standard deployment option, else you can extend the RS485 over Ethernet via a gateway or even MQTT</p><ol><li><p>Standard</p><p>The Sunsynk Add-on runs on the Home Assistant OS, reads the Inverter&#39;s Modbus registers over RS-485, and publishes sensor values to the MQTT server. The architecture is shown below:</p><p><img src="https://github.com/kellerza/sunsynk/raw/main/images/deploy.png" alt="Deployment Option"></p></li><li><p>A Modbus TCP to RTU/serial gateway</p><p>This can be another Raspberry Pi, even an old one, running the gateway software, like <a href="./mbusd">mbusd</a>.</p><p>You can also use a commercial Modbus gateway, like the USR-W630</p><p><img src="https://github.com/kellerza/sunsynk/raw/main/images/deploy-gw.png" alt="Deployment Option Gateway"></p></li><li><p>Extend with an MQTT gateway</p><p>This remote option runs the Sunsynk Addon close to the Inverter, and then sends MQTT messages over your network toward the MQTT server (typically on the same server as Home Assistant)</p><p><img src="https://github.com/kellerza/sunsynk/raw/main/images/deploy-mqtt.png" alt="Deployment Option MQTT"></p></li><li><p>Standalone in Docker</p><p>This runs the addon on its own in a docker container, without depending on Home Assistant</p><p>Read more <a href="./standalone-deployment">here</a>.</p><p><img src="https://github.com/kellerza/sunsynk/raw/main/images/deploy-standalone.png" alt="Deployment Option Standalone"></p></li></ol>',3),p=[s];function i(r,l,d,m,h,c){return t(),n("div",null,p)}const g=e(a,[["render",i]]);export{y as __pageData,g as default};
