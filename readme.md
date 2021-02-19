https://github.com/hipstersmoothie/react-docgen-typescript-plugin/issues/28

## steps to reproduce

* yarn install
* yarn start
* open http://localhost:8080/ in browser
* edit source code in src/my-button.tsx
* see changes in page
   
## steps to debug

* open node_modules/react-docgen-typescript-plugin/dist/plugin.js
* delete line 124 `//# sourceMappingURL=plugin.js.map`
* add a `debugger` statement in `processModule`
* open `chrome://inspect/` in chrome, and Open dedicated DevTools for Node
* yarn debug
